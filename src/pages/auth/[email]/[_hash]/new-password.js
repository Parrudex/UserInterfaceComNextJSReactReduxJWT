// @mui
import { styled } from '@mui/material/styles';
import { Box, Link, Container, Typography } from '@mui/material';
// layouts
import Layout from '../../../../layouts';
// components
import Page from '../../../../components/Page';
// sections
import { NewPasswordForm } from '../../../../sections/auth/new-password';
// assets
import { SentIcon } from '../../../../assets';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

NewPassword.getLayout = function getLayout(page) {
  return <Layout variant="logoOnly">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function NewPassword() {
  const { query, push } = useRouter();
  const { email,_hash } = query;
  return (
    <Page title="New Password">
      <Container>
        <ContentStyle sx={{ textAlign: 'center' }}>
          <SentIcon sx={{ mb: 5, mx: 'auto', height: 120 }} />

          <Typography variant="h3" gutterBottom>
            Requisição feita com sucesso!
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Insira sua nova senha!  
          </Typography>

          <Box sx={{ mt: 5, mb: 3 }}>
            <NewPasswordForm emailRecovery={email} _hash={_hash} />
          </Box>
        </ContentStyle>
      </Container>
    </Page>
  );
}
