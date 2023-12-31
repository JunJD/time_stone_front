import { Collapse, List } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import React from 'react';
import RenderItem, { FRUITSType } from './RenderItem';

const FRUITS = [
  { primary: '学习算法', secondary: 'leetcode算法题第999道题目' },
  { primary: '学习设计模式', secondary: '了解桥接模式在前端领域的应用' },
  { primary: 'react源码阅读', secondary: 'useState的封装' },
  { primary: '英语学习', secondary: '定语从句' },
  { primary: 'react native学习', secondary: '环境搭建' },
];

export default function TimerList() {
  const [fruitsInBasket, setFruitsInBasket] = React.useState(
    FRUITS.slice(0, 7),
  );
  const handleRemoveFruit = (item: FRUITSType) => {
    setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
  };
  return (
    <List
      sx={{
        my: 5,
      }}
    >
      <TransitionGroup>
        {fruitsInBasket.map((item, index) => (
          <Collapse key={item.primary}>
            <RenderItem
              item={item}
              index={index}
              progress={100}
              handleRemoveFruit={handleRemoveFruit}
            />
          </Collapse>
        ))}
      </TransitionGroup>
    </List>
  );
}
