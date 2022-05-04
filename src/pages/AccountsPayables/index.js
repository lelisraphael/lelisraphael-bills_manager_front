import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  Table,
  Stack,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  LinearProgress,
  Box
} from '@mui/material';
import Page from '../../components/Page';
import Scrollbar from '../../components/Scrollbar';
import Iconify from '../../components/Iconify';
import { UserListHead, UserMoreMenu } from '../../sections/@dashboard/payables';
import useAccountsPayables from '../../hooks/apiCalls/useAccountsPayables';

const TABLE_HEAD = [
  { id: 'description', label: 'Descricao', alignRight: false },
  { id: 'category', label: 'Categoria', alignRight: false },
  { id: 'amount', label: 'Valor', alignRight: false },
  { id: 'due_date', label: 'Vencimento', alignRight: false },
];

export default function AccountsPayables() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const { getAccountsPayables } = useAccountsPayables();

  useEffect(() => {
    getAccounts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getAccounts = async () => {
    const data = await getAccountsPayables()
    setIsLoading(false)
    setData(data.data)
  }

  return (
    <Page title="Contas a Pagar">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Contas a Pagar
          </Typography>
          <Button variant="contained" component={RouterLink} to="../accounts-payables/create" startIcon={<Iconify icon="eva:plus-fill" />}>
            Novo Lançamento
          </Button>
        </Stack>
        <Card>
          {isLoading &&            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>}
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  headLabel={TABLE_HEAD}
                />
                <TableBody>
                  {data?.map((item) => {
                    return <TableRow
                      hover
                      key={item.id}
                      tabIndex={-1}
                    >
                      <TableCell align="left">{item.description}</TableCell>
                      <TableCell align="left">{item.category.description}</TableCell>
                      <TableCell align="left">{item.amount}</TableCell>
                      <TableCell align="left">{item.due_date}</TableCell>
                      <TableCell align="right">
                        <UserMoreMenu
                          id={item.id}
                          getAccounts={getAccounts}
                        />
                      </TableCell>
                    </TableRow>
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
    </Page>
  );
}
