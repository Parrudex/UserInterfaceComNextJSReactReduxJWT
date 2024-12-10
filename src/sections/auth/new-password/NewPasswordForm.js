import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
// next
import { useRouter } from 'next/router';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, OutlinedInput, InputAdornment, FormHelperText } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_AUTH, PATH_DASHBOARD } from '../../../routes/paths';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';
import { newPassword, validateReset } from 'src/api';
import useLocales from "src/hooks/useLocales";
import { getError } from 'src/_exception/treatError';
// ----------------------------------------------------------------------

export default function NewPasswordForm({ emailRecovery,_hash }) {

  const { query, push } = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const {translate } = useLocales()

  const [showPassword, setShowPassword] = useState(false);

  const VerifyCodeSchema = Yup.object().shape({
    password: Yup.string().required('Senha é obrigatório!'),
    confirmPassword: Yup.string()
      .required('Confirmação de senha é obrigatório!')
      .oneOf([Yup.ref('password'), null], 'As senhas não correspondem!'),
  });

  const defaultValues = {
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });

  const {
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;


  const onSubmit = async (data) => {
    try {
      newPassword({
        email: emailRecovery,
        _hash: `${_hash}`,
        password: data.password,
      }).then((response)=>{
        enqueueSnackbar('Senha alterada com sucesso!');
        push(PATH_AUTH.login);
      }).catch((err)=>{
        console.log(err)
        enqueueSnackbar(translate(`${getError (err)}`),{variant: 'error'});
      })
     
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField
          name="password"
          label="Senha"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <RHFTextField
          name="confirmPassword"
          label="Confirmar Senha"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting} sx={{ mt: 3 }}>
          Alterar Senha
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
