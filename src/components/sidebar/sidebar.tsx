import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/joy/IconButton';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Sidebar: React.FC<any> = ({children}) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)} id='filter-btn' variant='outlined'><FilterAltIcon /></IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            { children }
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Sidebar
