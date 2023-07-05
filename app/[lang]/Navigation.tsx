'use client';

import React, {
  ElementType,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  Box,
  BoxProps,
  Chip,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemButtonProps,
  Typography,
  TypographyProps,
  styled,
  useTheme,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import navigation from '@/@core/navigation';
import themeConfig from '@/@core/configs/themeConfig';
import { useSettings } from '@/@core/hooks/useSettings';

import { NavItemsType, NavLinkType } from '@/@core/layouts.types';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import { langLayoutProps } from './params.types';
interface Props {
  verticalNavMenuContent?: (props?: any) => React.ReactNode;
  afterVerticalNavMenuContent?: (props?: any) => React.ReactNode;
  beforeVerticalNavMenuContent?: (props?: any) => React.ReactNode;

  lang: any;
}

const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight,
}));

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out',
}));

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
});

const NavHeader = () => {
  return (
    <MenuHeaderWrapper className="nav-header" sx={{ pl: 6 }}>
      <StyledLink>
        <HeaderTitle variant="h6" sx={{ ml: 3 }}>
          xxxxx
        </HeaderTitle>
      </StyledLink>
    </MenuHeaderWrapper>
  );
};

const StyledBoxForShadow = styled(Box)<BoxProps>({
  top: 50,
  left: -8,
  zIndex: 2,
  height: 75,
  display: 'none',
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  '&.d-block': {
    display: 'block',
  },
});

const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'opacity .25s ease-in-out',
});

const MenuNavLink = styled(ListItemButton)<
  ListItemButtonProps & {
    component?: ElementType;
    target?: '_blank' | undefined;
  }
>(({ theme }) => ({
  width: '100%',
  borderRadius: 15,
  color: theme.palette.text.primary,
  padding: theme.spacing(2.25, 3.5),
  transition: 'opacity .25s ease-in-out',
  '&.active, &.active:hover': {
    boxShadow: theme.shadows[3],
    background: theme.palette.primary.main,
  },
  '&.active .MuiTypography-root, &.active .MuiSvgIcon-root': {
    color: `${theme.palette.common.white} !important`,
  },
}));

const NavLink = ({
  item,
  lang,
  pathname,
  setPathname,
}: {
  item: NavLinkType;
  lang: langLayoutProps['params']['lang'];
  pathname: string;
  setPathname: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const router = useRouter();

  const isActive = useMemo(() => {
    return pathname === `/${lang}${item.path}`;
  }, [item.path, lang, pathname]);

  return (
    <ListItem
      disablePadding
      className="nav-link"
      sx={{ mt: 1.5, px: '0 !important' }}
    >
      <Link
        onClick={() => {
          setPathname(item.path === undefined ? '/' : `/${lang}${item.path}`);
          router.push(item.path === undefined ? '/' : `/${lang}${item.path}`);
        }}
      >
        <MenuNavLink
          component={'span'}
          className={isActive ? 'active' : ''}
          {...(item.openInNewTab ? { target: '_blank' } : null)}
          sx={{
            pl: 5.5,
            cursor: 'pointer',
          }}
        >
          <MenuItemTextMetaWrapper>
            <Typography>{item.title}</Typography>
            {item.badgeContent ? (
              <Chip
                label={item.badgeContent}
                color={item.badgeColor || 'primary'}
                sx={{
                  height: 20,
                  fontWeight: 500,
                  marginLeft: 1.25,
                  '& .MuiChip-label': { px: 1.5, textTransform: 'capitalize' },
                }}
              />
            ) : null}
          </MenuItemTextMetaWrapper>
        </MenuNavLink>
      </Link>
    </ListItem>
  );
};

export default function Navigation(props: Props) {
  const { lang } = props;

  const NavItems: NavItemsType = navigation(lang);

  const pathname = usePathname();

  const [_pathname, setPathname] = useState('/');

  useEffect(() => {
    setPathname(pathname);
  }, [pathname]);

  const RenderMenuItems = NavItems?.map((item: NavLinkType, index: number) => {
    // eslint-disable-next-line react/jsx-key
    return (
      <NavLink
        item={item}
        lang={lang}
        pathname={_pathname}
        setPathname={setPathname}
        key={item.title + index}
      />
    );
  });

  // ** Ref
  const shadowRef = useRef(null);

  const theme = useTheme();
  const navWidth = themeConfig.navigationSize;

  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  // ** custom hooks
  const { settings } = useSettings();
  return (
    <Drawer
      variant={hidden ? 'temporary' : 'permanent'}
      anchor="left"
      open={settings.navVisible}
      sx={{
        width: navWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: navWidth,
          boxSizing: 'border-box',
          border: 'none',
          bgcolor: theme.palette.background.default,
        },
      }}
    >
      <NavHeader />
      <StyledBoxForShadow
        ref={shadowRef}
        sx={{
          background: `linear-gradient(${
            theme.palette.background.default
          } 40%,${hexToRGBA(
            theme.palette.background.default,
            0.1,
          )} 95%,${hexToRGBA(theme.palette.background.default, 0.05)})`,
        }}
      />
      <Box sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <List
            className="nav-items"
            sx={{ transition: 'padding .25s ease', pr: 4.5 }}
          >
            {RenderMenuItems}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
}
