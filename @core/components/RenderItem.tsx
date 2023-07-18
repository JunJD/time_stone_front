import {
  AccessTime,
  MoreHoriz,
  Notes,
  PlayCircleOutline,
  ContentCopy,
  DeleteOutline,
  Tune,
} from '@mui/icons-material';
import {
  Box,
  Chip,
  ClickAwayListener,
  Grow,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
  useTheme,
} from '@mui/material';
import { useRef, useState } from 'react';
import MainCard from './MainCard';
export interface FRUITSType {
  primary: string;
  secondary: string;
}
interface RenderItemOptions {
  item: FRUITSType;
  index: number;
  progress?: number;
  handleRemoveFruit: (item: FRUITSType) => void;
}
const active = [
  {
    icon: <PlayCircleOutline />,
    label: '开始任务',
  },
  {
    icon: <ContentCopy />,
    label: '复制任务',
  },
  {
    icon: <DeleteOutline />,
    label: '删除任务',
  },
  {
    icon: <Tune />,
    label: '更多操作',
  },
];

export default function RenderItem({
  item,
  index,
  progress,
  handleRemoveFruit,
}: RenderItemOptions) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  function handleClose(event: MouseEvent | TouchEvent): void {
    setOpen(false);
  }

  function handleMenuItemClick(index: number) {
    requestAnimationFrame(() => {
      setOpen(false);
    });
  }
  return (
    <MainCard
      sx={{
        mb: 3,
        pt: 0,
      }}
    >
      <ListItem
        sx={{
          p: 0,
        }}
      >
        <ListItemSecondaryAction
          sx={{
            top: '25%',
          }}
          ref={anchorRef}
        >
          <IconButton
            edge="end"
            aria-label="delete"
            title="Delete"
            onClick={() => {
              setOpen(true);
            }}
          >
            <MoreHoriz />
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
              <Notes sx={{ fontSize: '14px', color: 'text.primary' }} />
              <Box sx={{ fontSize: '13px', color: 'text.primary', ml: 0.5 }}>
                2
              </Box>
            </IconButton>
            <IconButton aria-label="delete" sx={{ fontSize: '14px' }}>
              <AccessTime sx={{ fontSize: '14px', color: 'text.primary' }} />
              <Box sx={{ fontSize: '13px', color: 'text.primary', mx: 0.5 }}>
                30
              </Box>
              min
            </IconButton>
          </>
        </ListItemSecondaryAction>
      </ListItem>
      <Popper
        sx={{
          zIndex: 999,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="left-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper
              sx={{
                zIndex: theme.zIndex.tooltip,
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {active.map((option, index) => (
                    <MenuItem
                      key={`${option.label}_${index}`}
                      sx={{
                        color: 'text.primary',
                        fontSize: 13,
                        '& svg': {
                          fontSize: 13,
                        },
                      }}
                      // selected={index === selectedIndex}
                      onClick={() => handleMenuItemClick(index)}
                    >
                      {option.icon}
                      &nbsp;
                      {option.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </MainCard>
  );
}
