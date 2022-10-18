import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import './custom-modal'
import { useNavigate } from 'react-router';

interface CustomModalProps {
  open: boolean,
  toggle: () => void
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const CustomModal: React.FC<CustomModalProps> = ({
  open, 
  toggle
}) => {

  const navigate = useNavigate()

  const createNewResume = () => {
    toggle();
    navigate('/my-cv')
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={toggle}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque dignissimos fugiat officia illum ipsum! Natus est impedit voluptas velit eos provident. Quod est veritatis libero magnam quibusdam nemo architecto ex?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={createNewResume}>Create a new CV</Button>
          <Button variant='contained' onClick={toggle}>Apply current CV</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default CustomModal
