'use client';

import React, { ElementType, useEffect, useMemo, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Chip,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  Typography,
  TypographyProps,
  styled,
  useTheme,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import navigation from '@/@core/navigation';
import themeConfig from '@/@core/configs/themeConfig';
import { useSettings } from '@/@core/hooks/useSettings';

import { NavItemsType, NavLinkType } from '@/@core/layouts.types';
import { langLayoutProps } from '../params.types';
import dictionaries from '../dictionaries';
import { useSnackbar } from 'notistack';

interface Props {
  NavMenuContent?: (props?: any) => React.ReactNode;

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
  fontFamily: 'fantasy',
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.primary.main,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out',
}));

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
});

const NavHeader = () => {
  return (
    <MenuHeaderWrapper className="nav-header" sx={{ pl: 8, pt: 5 }}>
      <StyledLink>
        <Avatar
          alt="me"
          src="/64a96717-ee4e-46e8-bdd2-7409868073da-1683683373.jpg"
        />
        <HeaderTitle variant="h6" sx={{ ml: 3 }}>
          TIME STONE
        </HeaderTitle>
      </StyledLink>
    </MenuHeaderWrapper>
  );
};

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
  const { enqueueSnackbar } = useSnackbar();
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
          if (!item?.isBeta) {
            router.push(item.path === undefined ? '/' : `/${lang}${item.path}`);
          } else {
            enqueueSnackbar('待开放', {
              variant: 'warning',
              autoHideDuration: 2000,
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'center',
              },
            });
          }
          setPathname(item.path === undefined ? '/' : `/${lang}${item.path}`);
        }}
      >
        <MenuNavLink
          component={'span'}
          className={isActive ? 'active' : ''}
          {...(item.openInNewTab ? { target: '_blank' } : null)}
          sx={{
            pl: 5.5,
            cursor: 'pointer',
            minWidth: themeConfig.navigationSize / 1.5,
          }}
        >
          <ListItemIcon
            sx={{
              mr: 2.5,
              color: 'text.primary',
              transition: 'margin .25s ease-in-out',
            }}
          >
            {item.icon}
          </ListItemIcon>
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
  const { lang, NavMenuContent: userNavMenuContent } = props;

  const NavItems: NavItemsType = navigation(lang);

  const pathname = usePathname();

  const [_pathname, setPathname] = useState('/');

  useEffect(() => {
    setPathname(pathname);
  }, [pathname]);

  const RenderMenuItems = NavItems?.map((item: NavLinkType, index: number) => {
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
  const authLang = useMemo(() => {
    return (dictionaries(lang) as any).auth;
  }, [lang]);

  const theme = useTheme();
  const navWidth = themeConfig.navigationSize;

  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  // ** custom hooks
  const { settings } = useSettings();

  const afterNavMenuContent = useMemo(() => {
    return (
      <Button
        sx={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          textTransform: 'lowercase',
          mb: 5,
          mx: 8,
        }}
        variant="text"
        size="small"
        onClick={() => {
          console.log('登出');
        }}
      >
        <LogoutIcon />
        <Typography
          sx={{
            pl: 2,
          }}
          variant="body2"
        >
          {authLang.LogOut}
        </Typography>
      </Button>
    );
  }, [authLang.LogOut]);

  // todo beforeNavMenuContent
  const beforeNavMenuContent = useMemo(() => {
    return null;
  }, []);

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
      {beforeNavMenuContent}
      <Box sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
        <Box
          sx={{
            pt: 5,
            mx: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {userNavMenuContent ? (
            userNavMenuContent(props)
          ) : (
            <List
              className="nav-items"
              sx={{ transition: 'padding .25s ease', pr: 4.5 }}
            >
              {RenderMenuItems}
            </List>
          )}
        </Box>
      </Box>
      {afterNavMenuContent}
    </Drawer>
  );
}
