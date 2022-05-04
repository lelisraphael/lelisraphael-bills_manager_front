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
import { LoadingButton } from '@mui/lab';
import useAccountsReceivables from '../../hooks/apiCalls/useAccountsReceivables';


export default function CreateRecevables() {
  const navigate = useNavigate();
  const { createAccountsReceivables } = useAccountsReceivables();

  const formik = useFormik({
    initialValues: {
      description: '',
      category_id: '',
      amount: '',
      due_date: '',
    },
    onSubmit: (values) => {
      navigate('/dashboard/accounts-recivables', { replace: true });
      createAccountsReceivables(values)
    },
  });

  const { handleSubmit, isSubmitting, getFieldProps } = formik;

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
                    name="description"
                    fullWidth
                    label="Descrição"
                    value={1}
                    {...getFieldProps('description')}
                  />
                  <Select
                    fullWidth
                    id="demo-simple-select"
                    value={1}
                    {...getFieldProps('category_id')}
                  >
                    <MenuItem value={1}>Ten</MenuItem>
                    <MenuItem value={2}>Twenty</MenuItem>
                    <MenuItem value={3}>Thirty</MenuItem>
                  </Select>
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Valor"
                    name="amount"
                    {...getFieldProps('amount')}

                  />
                  <TextField
                    type="date"
                    fullWidth
                    name="due_date"
                    {...getFieldProps('due_date')}
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
