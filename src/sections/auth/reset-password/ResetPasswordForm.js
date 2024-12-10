import * as Yup from 'yup';
// next
import { useRouter } from 'next/router';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { Box, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_AUTH } from '../../../routes/paths';
// components
import { FormProvider, RHFTextField } from '../../../components/hook-form';

import {WPCaptcha} from '../../../../public/assets/js/wpCaptcha'
import { resetPassword } from 'src/api';
import { da } from 'date-fns/locale';
import Label from 'src/components/Label';
import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import useLocales from 'src/hooks/useLocales';
import { getError } from 'src/_exception/treatError';
// ----------------------------------------------------------------------

export default function ResetPasswordForm() {
  const { push } = useRouter();

  const {translate } = useLocales()

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Endereço de email invalido').required('Email é obrigatorio!'),
    input_captcha: Yup.string().max(8,'Limite de caracteres é 8!')
  });
  const [captcha,setCaptcha] = useState();

  const { enqueueSnackbar } = useSnackbar();

  useEffect(()=>{
    setCaptcha({...WPCaptcha.getInstance(), check: WPCaptcha.check})
  },[])

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: { email: '', input_captcha: '' },
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      const check = captcha.check(data.input_captcha)
      if(check.isValid){
        setCaptcha({...WPCaptcha.getInstance(), check: WPCaptcha.check})
        resetPassword({email:data.email})
        .then((response)=>{
          enqueueSnackbar(`Email para restauração de senha enviado para o endereço: ${data.email}`)
        })
        .catch((err)=>{
          enqueueSnackbar(translate(`${getError (err)}`),{variant: 'error'})
        })
      }else
        enqueueSnackbar(check.message,{variant: 'error'})
    } catch (error) {
      console.error(error);
    }
  };

  return !captcha ?  null : (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{display:'flex', flexWrap: 'wrap'}}>
        <Box sx={{width: '100%', marginBottom: 5}}>
          <Label sx={{userSelect: 'none'}} >{captcha.strCod}</Label>
        </Box>
        <Box sx={{width: '100%', display: 'grid', columnGap: 2,  marginBottom: 2}}>
          <RHFTextField  onPaste={(e)=>{ e.preventDefault();}} name="input_captcha" label="Codigo" style={{}} inputProps={{ maxLength: 8}
           } />
          <source src={captcha.audioCod} type="audio/mpeg"></source>
        </Box>
      </Box>
      <Stack spacing={3}>
        <RHFTextField name="email" label="Endereço de email" />
        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Enviar email
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
