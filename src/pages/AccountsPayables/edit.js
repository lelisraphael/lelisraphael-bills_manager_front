import * as React from 'react';
import { useState, useEffect } from 'react'
import { Link as RouterLink, useParams } from 'react-router-dom';
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
import { LoadingButton } from '@mui/lab';
import useAccountsReceivables from '../../hooks/apiCalls/useAccountsReceivables';
import useAccountsCategories from '../../hooks/apiCalls/useAccountsCategories';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function EditRecevables() {
  const [categoriesData, setCategoriesData] = useState()
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState()
  const { id } = useParams();
  const { createAccountsReceivables, getAccountsReceivables } = useAccountsReceivables();
  const { getAccountsCategories } = useAccountsCategories();
  const [description, setDescription] = useState()

  useEffect(() => {
    getCategories()
    getAccounts(id)
  }, [])

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const getCategories = async () => {
    const categories = await getAccountsCategories()
    setCategoriesData(categories)
  }

  const getAccounts = async (id) => {
    const accounts = await getAccountsReceivables(id)
    setAccount(accounts)
    setDescription("teste")
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      description: account?.data.description,
      category_id: '1',
      amount_id: account?.data.amount,
      due_date: account?.data.due_date,
    },
    onSubmit: (values) => {
      createAccountsReceivables(values)
      setOpen(true);
    },
  });

  const { handleSubmit, isSubmitting, getFieldProps, touched } = formik;

  return (
    account?.data.description !== undefined && <Page title="Contas a Receber" >
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Dados salvos com sucesso! :)
        </Alert>
      </Snackbar>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Contas a Receber
          </Typography>
          <Button variant="contained" component={RouterLink} to="../accounts-receivables" startIcon={<Iconify icon="eva:back" />}>
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
                    {...getFieldProps('description')}
                  />
                  <Select
                    fullWidth
                    id="demo-simple-select"
                    {...getFieldProps('category_id')}
                  >
                    {categoriesData?.map((item) => {
                      return <MenuItem key={item.id} value={item.id}>{item.description}</MenuItem>
                    })}
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
                  >
                    Salvar
                  </LoadingButton>
                </Stack>
              </Stack>
            </Form>
          </FormikProvider>
        </Card>
      </Container>
    </Page >
  );
}
