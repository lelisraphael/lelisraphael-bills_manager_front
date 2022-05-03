import axios from 'axios';
import { useState } from 'react'

const useAccountsReceivables = () => {
  const [status, setStatus] = useState()

  const getAccountsReceivables = async (id = '') => {

    const data = await axios.get(`https://letsolutions-bills-manager.herokuapp.com/api/v1/accounts_receivables/${id}`)
    setStatus(data.status)
    return data
  }

  return { getAccountsReceivables, status }
}

export default useAccountsReceivables