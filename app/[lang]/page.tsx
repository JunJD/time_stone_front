'use client';

import React from 'react';
import { langProps } from './params.types';
import MainCard from '@/@core/components/MainCard';
import { Box, BoxProps, Theme, styled, useMediaQuery } from '@mui/material';
import TextArea from '@/@core/components/TextArea';
import SaveButton from '@/@core/components/SaveButton';
import TimerList from '@/@core/components/TimerList';

const HomeWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
}));

const HomeLeftSection = styled('section')(() => ({
  flex: 7,
}));

const HomeRightSection = styled('section')(() => ({
  paddingLeft: 12 + 6 + 'px',
  flex: 3,
}));

export default function Page({ params }: langProps) {
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const handleSave = (timer: string) => {
    console.info(`You clicked ${timer}`);
  };

  return (
    <HomeWrapper>
      <HomeLeftSection>
        {/* add 碎片 */}
        <MainCard
          contentSX={{
            paddingBottom: '0px !important',
          }}
        >
          <TextArea
            value={''}
            handleChange={() => {}}
            placeholder="你想利用当前碎片时间做些什么..."
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
                />
              </Box>
            }
          />
        </MainCard>
        {/* 碎片 list */}
        <MainCard
          sx={{
            mt: 3,
          }}
          title={'今日碎片时间'}
        >
          <TimerList />
        </MainCard>
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
