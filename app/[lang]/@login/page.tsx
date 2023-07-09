'use client';

// ** React Imports
import { ChangeEvent, MouseEvent, useState } from 'react';

// ** Next Imports
import Link from 'next/link';

// ** MUI Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import MuiCard, { CardProps } from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import MuiFormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';
import { useRouter } from 'next/navigation';
import dictionaries from './../dictionaries';
import { langLayoutProps } from '../params.types';

// import themeConfig from '@/@core/configs/themeConfig';

interface State {
  password: string;
  showPassword: boolean;
}

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' },
}));

const LinkStyled = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main,
}));

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(
  ({ theme }) => ({
    '& .MuiFormControlLabel-label': {
      fontSize: '0.875rem',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function Page(props: langLayoutProps) {
  // ** State
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false,
  });

  // ** Hook
  const lang = props.params.lang;
  const router = useRouter();

  const { login } = dictionaries(lang) as any;

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        overflowX: 'hidden',
        position: 'relative',
        p: 5,
      }}
    >
      <Card sx={{ zIndex: 1 }}>
        <CardContent
          sx={{ padding: (theme) => `${theme.spacing(12, 9, 7)} !important` }}
        >
          <Box
            sx={{
              mb: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width="57.5714111328125"
              height="56.67449951171875"
              viewBox="0 0 57.5714111328125 56.67449951171875"
              fill="none"
            >
              <g
                opacity="1"
                transform="translate(0.0001220703125 0)  rotate(0)"
              >
                <g
                  opacity="1"
                  transform="translate(7.3863525390625 1.88970947265625)  rotate(0)"
                >
                  <path
                    id="Vector"
                    fillRule="evenodd"
                    fill="#FFFFFF"
                    opacity="1"
                    d="M1.28125 23.0799C1.28125 24.5799 1.86125 26.0299 2.90125 27.1599L8.46125 33.1399C9.95125 34.7599 12.7712 33.7599 12.7712 31.6099L12.7712 12.9999C12.7712 10.8499 9.95125 9.84992 8.46125 11.4699L2.90125 17.4499C1.86125 18.5799 1.28125 20.0299 1.28125 21.5299L1.28125 23.0799Z"
                  ></path>
                  <g opacity="1" transform="translate(0 0)  rotate(0)">
                    <path
                      id="Vector"
                      fillRule="evenodd"
                      fill="#3984FD"
                      opacity="1"
                      d="M0 29.85C0 38.1 7.08 44.78 15.82 44.78L31.65 44.78C40.39 44.78 47.47 38.1 47.47 29.85L47.47 14.93C47.47 6.68 40.39 0 31.65 0L15.82 0C7.08 0 0 6.68 0 14.93L0 29.85Z"
                    ></path>
                  </g>
                </g>
                <path
                  id="Vector"
                  fillRule="evenodd"
                  fill="#FFFFFF"
                  opacity="1"
                  d="M21.2033 11.5212C22.3662 12.5154 21.9781 15.17 20.039 19.4851C18.2545 23.4193 16.4634 27.3611 14.6724 31.3029C13.0894 35.9094 13.2866 39.0644 15.2629 40.7538C18.4553 43.483 24.7719 43.9888 34.2192 42.2638C43.3064 40.6521 49.2614 38.3492 52.0776 35.3627C55.8426 31.3587 56.0267 27.8192 52.6234 24.7519C48.0494 20.5917 42.7343 20.3763 36.6576 24.1144C37.8154 24.499 38.801 25.039 39.6143 25.7343C41.3321 27.2028 41.3125 28.7647 39.5488 30.4276C38.5002 31.4388 36.3625 32.4004 33.1358 33.3125C29.9015 34.2181 27.9341 34.3649 27.2196 33.7541C26.3075 32.9744 26.8684 30.6254 28.896 26.7147C29.4563 25.536 31.0925 22.6986 33.8048 18.2024C36.3158 14.0341 36.1447 10.9409 33.2992 8.92931C32.1038 8.06532 29.6129 7.5935 25.8262 7.51384C23.0105 7.51427 20.1719 7.49521 17.317 7.44905L17.2498 10.7595C19.6277 11.0557 20.9448 11.3002 21.2033 11.5212Z"
                ></path>
              </g>
            </svg>
            <Typography
              variant="h6"
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: 'uppercase',
                fontSize: '1.5rem !important',
                fontFamily: 'fantasy',
              }}
            >
              timeStone
            </Typography>
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: 1.5 }}
            >
              {login.welcome}! 👋🏻
            </Typography>
            <Typography variant="body2">{login.site}</Typography>
          </Box>
          <form
            noValidate
            autoComplete="off"
            onSubmit={(e) => e.preventDefault()}
          >
            <TextField
              autoFocus
              fullWidth
              id="email"
              label={login.email}
              sx={{ marginBottom: 4 }}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor="auth-login-password">
                {login.password}
              </InputLabel>
              <OutlinedInput
                label={login.password}
                value={values.password}
                id="auth-login-password"
                onChange={handleChange('password')}
                type={values.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label="toggle password visibility"
                    >
                      {values.showPassword ?? 'aaa'}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box
              sx={{
                mb: 4,
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label={login.rememberMe}
              />
              <Link passHref href="/">
                <LinkStyled onClick={(e) => e.preventDefault()}>
                  {login.forgotPassword}?
                </LinkStyled>
              </Link>
            </Box>
            <Button
              fullWidth
              size="large"
              variant="contained"
              sx={{ marginBottom: 7 }}
              onClick={() => router.push('/en')}
            >
              {login.loginText}
            </Button>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body2" sx={{ marginRight: 2 }}>
                {login.newOnPlatform}?
              </Typography>
              <Typography variant="body2">
                <Link passHref href="/pages/register">
                  <LinkStyled>{login.createAccount}</LinkStyled>
                </Link>
              </Typography>
            </Box>
          </form>
        </CardContent>
      </Card>
      {/* <FooterIllustrationsV1 /> */}
    </Box>
  );
}
