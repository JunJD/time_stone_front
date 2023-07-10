import {
  Box,
  Chip,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import MainCard from './MainCard';
import NotesIcon from '@mui/icons-material/Notes';

interface FRUITSType {
  primary: string;
  secondary: string;
}

interface RenderItemOptions {
  item: FRUITSType;
  progress?: number;
  handleRemoveFruit: (item: FRUITSType) => void;
}

const FRUITS = [
  { primary: '学习算法', secondary: 'leetcode算法题第999道题目' },
  { primary: '学习设计模式', secondary: '了解桥接模式在前端领域的应用' },
  { primary: 'react源码阅读', secondary: 'useState的封装' },
];

function renderItem({ item, progress, handleRemoveFruit }: RenderItemOptions) {
  return (
    <>
      <ListItem
        sx={{
          p: 0,
        }}
      >
        <ListItemSecondaryAction
          sx={{
            top: '25%',
          }}
        >
          <IconButton
            edge="end"
            aria-label="delete"
            title="Delete"
            onClick={() => handleRemoveFruit(item)}
          >
            <MoreVertIcon />
          </IconButton>
        </ListItemSecondaryAction>
        <ListItemText
          sx={{
            display: 'block',
          }}
          primary={<Chip label={item.primary} sx={{ color: 'text.primary' }} />}
          secondary={
            <Typography variant="subtitle1">{item.secondary}</Typography>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemSecondaryAction
          sx={{
            p: 0,
            m: 0,
            mt: 3,
          }}
        >
          <>
            <IconButton aria-label="delete" sx={{ fontSize: '13px' }}>
              <NotesIcon sx={{ fontSize: '14px', color: 'text.primary' }} />
              <Box sx={{ fontSize: '13px', color: 'text.primary', ml: 0.5 }}>
                2
              </Box>
            </IconButton>
            <IconButton aria-label="delete" sx={{ fontSize: '14px' }}>
              <AccessTimeIcon
                sx={{ fontSize: '14px', color: 'text.primary' }}
              />
              <Box sx={{ fontSize: '13px', color: 'text.primary', mx: 0.5 }}>
                30
              </Box>
              min
            </IconButton>
          </>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
}

export default function TimerList() {
  const [fruitsInBasket, setFruitsInBasket] = React.useState(
    FRUITS.slice(0, 3),
  );
  const handleRemoveFruit = (item: FRUITSType) => {
    setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
  };
  return (
    <List>
      <TransitionGroup>
        {fruitsInBasket.map((item) => (
          <Collapse key={item.primary}>
            <MainCard
              sx={{
                mt: 3,
              }}
            >
              {renderItem({ item, progress: 100, handleRemoveFruit })}
            </MainCard>
          </Collapse>
        ))}
      </TransitionGroup>
    </List>
  );
}
