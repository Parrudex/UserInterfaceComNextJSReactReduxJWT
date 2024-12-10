import React from 'react'
import { useEffect,useState } from 'react';
import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    IconButton,
    Popper
} from '@mui/material';
import Iconify from 'src/components/Iconify';

export default function TableToggleHiddenColumns({arrHead}){
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    useEffect(()=>{
        //
    })
    
    return (
        <>
            <IconButton ariaDescribedby={id} variant="contained" color='inherit' onClick={handleClick}>
                <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
            </IconButton>
            <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                placement="bottom-end"
                sx={{
                    '& .MuiBox-root': {
                        typography: 'body2',
                        borderRadius: 0.75,
                        borderColor: '#E1e1E1'
                    }
                }}>
                <Box sx={{ display: 'flex', border: 1, p: 1, bgcolor: 'background.paper' }}>
                    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                        <FormLabel component="legend">Colunas visíveis</FormLabel>
                        <FormGroup>
                            {arrHead.filter(head => head.id).map((head) => (
                                <FormControlLabel
                                    control={
                                        // <Checkbox checked={head.id} onChange={() => handleChange(head.id)} name={head.label} />
                                        <Checkbox checked={head.id} onChange={() => handleChange(head.id)} name={head.label} />
                                    }
                                    label={head.label}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                </Box>
            </Popper>
        </>
    )
}