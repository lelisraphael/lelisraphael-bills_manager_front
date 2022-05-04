import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  Button,
  Container,
  Typography,
  Stack,
  TextField,
  Select,
  MenuItem,

} from '@mui/material';
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { LoadingButton } from '@mui/lab';
// component

export default function CreateRecevables() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      description: '',
      category: '',
      amount: '',
      due_date: '',
    },
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    },
  });

  const { handleSubmit, isSubmitting } = formik;

  return (
    <Page title="Contas a Receber">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Contas a Receber
          </Typography>
          <Button variant="contained" component={RouterLink} to="../" startIcon={<Iconify icon="eva:back" />}>
            Voltar
          </Button>
        </Stack>
        <Card>

          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Stack spacing={3} m={5} >

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField
                    fullWidth
                    label="Descrição"
                  />
                  <Select
                    fullWidth
                    id="demo-simple-select"
                    value={1}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Valor"
                  />
                  <TextField
                    type="date"
                    fullWidth
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <LoadingButton
                    size="large"
                    type="submit" variant="contained"
                    loading={isSubmitting}>
                    Salvar
                  </LoadingButton>
                </Stack>


              </Stack>
            </Form>
          </FormikProvider>
        </Card>
      </Container>
    </Page>
  );
}
