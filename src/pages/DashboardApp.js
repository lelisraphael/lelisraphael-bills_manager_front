import { useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import Page from '../components/Page';
import {
  AppCurrentVisits,
  AppWidgetSummary,
} from '../sections/@dashboard/app';

import useAccountsDashboard from '../hooks/apiCalls/useAccountsDashboard'

export default function DashboardApp() {
  const theme = useTheme();
  const { getAccountsDashboard } = useAccountsDashboard()
  const [data, setData] = useState()

  useEffect(() => {
    getAccounts()
  }, [])

  const getAccounts = async () => {
    const accountsData = await getAccountsDashboard()
    setData(accountsData)
  }

  const byCategoryReceivable = () => {
    const obj = data?.total_accounts_receivable?.by_category
    const receivables = []
    Object.keys(obj).forEach((item) => {
      receivables.push(
        {
          label: item,
          value: parseInt(obj[item], 10)
        }
      )
    });
    return receivables
  }

  const byCategoryPayable = () => {
    const obj = data?.total_accounts_payable?.by_category
    const receivables = []
    Object?.keys(obj).forEach((item) => {
      receivables.push(
        {
          label: item,
          value: parseInt(obj[item], 10)
        }
      )
    });
    return receivables
  }

  return (
    data !== undefined &&
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Bem vindo!
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <AppWidgetSummary title="Total de Contas a Pagar" total={data?.total_accounts_payable.general || 0} color="error" />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <AppWidgetSummary title="Total de Contas a Receber" total={data?.total_accounts_receivable.general || 0} color="success" />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppCurrentVisits
              title="Conta a Pagar"
              chartData={byCategoryPayable()}
              chartColors={[
                theme.palette.chart.red[1],
                theme.palette.chart.yellow[0],
                theme.palette.chart.blue[5],
                theme.palette.chart.yellow[10]
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppCurrentVisits
              title="Conta a Receber"
              chartData={byCategoryReceivable()}
              chartColors={[
                theme.palette.chart.blue[5],
                theme.palette.chart.yellow[0],
                theme.palette.chart.blue[10],
              ]}
            />
          </Grid>


        </Grid>
      </Container>
    </Page>
  );
}
