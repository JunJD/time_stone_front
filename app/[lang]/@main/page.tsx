'use client';

import React, { ChangeEventHandler, useRef, useState } from 'react';
import { langProps } from './../params.types';
import MainCard from '@/@core/components/MainCard';
import {
  Box,
  BoxProps,
  Theme,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import TextArea from '@/@core/components/TextArea';
import SaveButton from '@/@core/components/SaveButton';
import TimerList from '@/@core/components/TimerList';
import dictionaries from './../dictionaries';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';

const HomeWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  height: '100vh',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

const HomeLeftSection = styled('div')(() => ({
  flex: 7,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'transparent',
}));

const HomeRightSection = styled('div')(() => ({
  paddingLeft: 12 + 6 + 'px',
  flex: 3,
  position: 'sticky',
  top: '0px',
}));

const StyledBoxForShadow = styled(Box)<BoxProps>(({ theme }) => ({
  top: 174,
  left: -8,
  zIndex: 992,
  height: 38,
  display: 'none',
  position: 'absolute',
  pointerEvents: 'none',
  backgroundColor: 'red',
  '&.d-block': {
    display: 'block',
  },
  // boxShadow: theme.shadows[2],
}));

export default function Page({ params }: langProps) {
  const lang = params.lang;

  const { textArea } = dictionaries(lang) as any;
  const options = [10, 20, 30, 60].map(
    (time) => time + ` ${textArea.timerUnit}`,
  );
  const theme = useTheme();
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  /** states */
  const [value, setValue] = useState('');

  // ** Ref
  const shadowRef = useRef(null);

  /** functions */
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value);
  };

  // ** Scroll Menu
  const scrollMenu = (container: any) => {
    container = container.target;
    if (shadowRef && container.scrollTop > 0) {
      // @ts-ignore
      if (!shadowRef.current.classList.contains('d-block')) {
        console.log(1221);
        // @ts-ignore
        shadowRef.current.classList.add('d-block');
      }
    } else {
      // @ts-ignore
      shadowRef.current.classList.remove('d-block');
    }
  };

  const handleSave = (timer: string) => {
    console.info(`You clicked ${timer}`);
  };

  return (
    <HomeWrapper onScroll={(container) => scrollMenu(container)}>
      <HomeLeftSection>
        {/* add 碎片 */}
        <MainCard
          sx={{
            position: 'sticky',
            top: '0px',
            bottom: '10px',
            height: '150px',
            zIndex: 9,
          }}
          contentSX={{
            paddingBottom: '0px !important',
            mb: 10,
          }}
        >
          <TextArea
            value={value}
            handleChange={handleChange}
            placeholder={textArea.placeholder}
            endDecorator={
              <Box
                sx={{
                  display: 'flex',
                  borderTop: '1px solid',
                  borderColor: 'divider',
                  flex: 'auto',
                }}
              >
                {/* <ModeToggler settings={settings} saveSettings={saveSettings} /> */}
                <SaveButton
                  sx={{
                    ml: 'auto',
                    my: 2,
                  }}
                  handleSave={handleSave}
                  OkText={textArea.OkText}
                  rightOptions={options}
                />
              </Box>
            }
          />
        </MainCard>
        <StyledBoxForShadow
          ref={shadowRef}
          sx={{
            width: hidden ? '100%' : 'calc(70% + 85px)',
            background: `linear-gradient(${
              theme.palette.background.default
            } 40%,${hexToRGBA(
              theme.palette.background.default,
              0.1,
            )} 95%,${hexToRGBA(theme.palette.background.default, 0.05)})`,
          }}
        />
        {/* 碎片 list */}
        <TimerList />
      </HomeLeftSection>
      {/* 右侧 */}
      {!hidden && (
        <HomeRightSection>
          <MainCard>right</MainCard>
        </HomeRightSection>
      )}
    </HomeWrapper>
  );
}
