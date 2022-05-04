import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  Stack,
  Button,
  Container,
  Typography,
} from '@mui/material';
import Page from '../../components/Page';
import Scrollbar from '../../components/Scrollbar';
import Iconify from '../../components/Iconify';


export default function CreatePayables() {

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
            
          </Scrollbar>

        </Card>
      </Container>
    </Page>
  );
}
