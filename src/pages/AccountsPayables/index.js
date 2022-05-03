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
} from '@mui/material';
import Page from '../../components/Page';
import Scrollbar from '../../components/Scrollbar';
import Iconify from '../../components/Iconify';
import { UserListHead, UserMoreMenu } from '../../sections/@dashboard/user';
import useAccountsReceivables from '../../hooks/apiCalls/useAccountsReceivables';

const TABLE_HEAD = [
  { id: 'description', label: 'Descricao', alignRight: false },
  { id: 'category', label: 'Categoria', alignRight: false },
  { id: 'amount', label: 'Valor', alignRight: false },
  { id: 'due_date', label: 'Vencimento', alignRight: false },
];

export default function AccountsReceivables() {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const { getAccountsReceivables } = useAccountsReceivables();

  useEffect(() => {
    getAccounts()
  }, [])

  const getAccounts = async () => {
    const data = await getAccountsReceivables()
    setIsLoading(false)
    setData(data.data)
  }

  return (
    <Page title="Contas a Receber">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Contas a Receber
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            Novo Lançamento
          </Button>
        </Stack>
        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  headLabel={TABLE_HEAD}
                />
                {isLoading && "Carregando"}
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
                        <UserMoreMenu />
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
