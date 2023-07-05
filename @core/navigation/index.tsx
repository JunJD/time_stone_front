import { NavItemsType } from '../layouts.types';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MoreTimeRoundedIcon from '@mui/icons-material/MoreTimeRounded';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import dictionaries from '@/app/[lang]/dictionaries';

const navigation = (lang: any): NavItemsType => {
  const { navigation } = dictionaries(lang) as any;
  return [
    {
      title: navigation.HomePage as string,
      icon: <MoreTimeRoundedIcon />,
      path: '/HomePage',
      badgeColor: 'info',
      badgeContent: 'beta',
    },
    {
      title: navigation.DailyTrend as string,
      path: '/DailyTrend',
      icon: <TrendingUpOutlinedIcon />,
      badgeColor: 'secondary',
      badgeContent: 'beta',
    },
    {
      title: navigation.resourceLibrary as string,
      icon: <WebAssetOutlinedIcon />,
      path: '/resourceLibrary',
      badgeColor: 'success',
      badgeContent: 'beta',
    },
    {
      title: navigation.AskAI as string,
      path: '/AskAI',
      icon: <SmartToyOutlinedIcon />,
      badgeColor: 'warning',
      badgeContent: 'beta',
    },
    {
      title: navigation.Settings as string,
      path: '/ceshi',
      icon: <DisplaySettingsOutlinedIcon />,
      badgeColor: 'success',
      badgeContent: 'beta',
    },

    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },

    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    // {
    //   sectionTitle: 'User Interface'
    // },
  ];
};

export default navigation;
