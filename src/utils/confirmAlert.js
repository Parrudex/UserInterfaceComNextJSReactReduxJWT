
import { Button, Divider,Box } from '@mui/material';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

export const openConfirmAlert = ({title, message, onConfirm, onRefuse} ) =>{
 confirmAlert({
    customUI: ({ onClose }) => {
        return (
          <>
            <Box className="alert" sx={{padding: 2, zIndex: 2000}}>
                <Box sx={{marginBottom: 1}}>
                    <h3 className="alert__title">{title}</h3>
                    <p className="alert__body">{message}</p>
                </Box>
                <Divider/>
                <Box sx={{marginTop: 1}}>
                    <Button  sx={{marginRight: 1}} color="primary" variant='contained'  onClick={()=>{onRefuse();onClose();}} >Não</Button>
                    <Button color="primary"  variant='outlined' onClick={() => {onConfirm();onClose();}}>Sim</Button>
                </Box>
            </Box>
          </>
        );
      }
  });
}