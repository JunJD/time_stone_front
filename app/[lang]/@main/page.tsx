'use client';

import React, { ChangeEventHandler, useState } from 'react';
import { langProps } from './../params.types';
import MainCard from '@/@core/components/MainCard';
import { Box, BoxProps, Theme, styled, useMediaQuery } from '@mui/material';
import TextArea from '@/@core/components/TextArea';
import SaveButton from '@/@core/components/SaveButton';
import TimerList from '@/@core/components/TimerList';
import dictionaries from './../dictionaries';

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
  const lang = params.lang;

  const { textArea, timerList } = dictionaries(lang) as any;
  const options = [10, 20, 30, 60].map(
    (time) => time + ` ${textArea.timerUnit}`,
  );
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  /** states */
  const [value, setValue] = useState('');

  /** functions */
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value);
  };

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
        {/* 碎片 list */}
        <MainCard
          sx={{
            mt: 3,
          }}
          title={timerList.title}
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
