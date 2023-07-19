'use client';

// ** React Imports
import { useEffect } from 'react';

// ** MUI Imports
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import GitHubIcon from '@mui/icons-material/GitHub';
// ** Type Import
import { Box, IconButton, useMediaQuery } from '@mui/material';
import { useSettings } from '@/@core/hooks/useSettings';

interface Props {
  lang: any;
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
  minHeight: `${Number(theme.mixins.toolbar.minHeight) / 1.2}px !important`,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}));

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: '100%',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  minHeight: `${Number(theme.mixins.toolbar.minHeight) / 1.2}px !important`,
  transition:
    'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out, background-color .25s ease-in-out',
}));

const LayoutAppBar = (props: Props) => {
  // ** Props
  const { lang } = props;

  useEffect(() => {
    console.log(lang);
  }, [lang]);

  // ** Hooks
  const theme = useTheme();
  const hiddenMd = useMediaQuery(theme.breakpoints.down('md'));
  const hiddenSm = useMediaQuery(theme.breakpoints.down('sm'));

  const { settings, saveSettings } = useSettings();

  function toggleDrawer(flag: boolean) {
    saveSettings({
      ...settings,
      navVisible: flag,
    });
  }

  function handleToGithub() {
    window.open('https://github.com/JunJD/time_stone_front');
  }
  return (
    <>
      {hiddenMd && (
        <AppBar
          sx={{
            transition:
              'max-width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            zIndex: theme.zIndex.appBar,
            position: 'relative',
            right: 0,
            top: 0,
          }}
          elevation={0}
          color="default"
          className="layout-navbar"
        >
          <Toolbar
            className="navbar-content-container"
            sx={{
              transition:
                'max-width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <IconButton
                  onClick={() => {
                    toggleDrawer(true);
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    handleToGithub();
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </Box>
              {hiddenSm && (
                <IconButton>
                  <ManageSearchIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default LayoutAppBar;
