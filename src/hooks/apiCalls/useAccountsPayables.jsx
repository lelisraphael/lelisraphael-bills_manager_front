import axios from 'axios';

const useAccountsPayables = () => {

  const getAccountsPayables = async (id = '') => {
    const data = await axios.get(`https://letsolutions-bills-manager.herokuapp.com/api/v1/accounts_payables/${id}`)
    return data
  }

  const delAccountsPayables = async (id) => {
    await axios.delete(`https://letsolutions-bills-manager.herokuapp.com/api/v1/accounts_payables/${id}`)
  }

  const createAccountsPayables = async (params) => {
    const data = await axios.post(`https://letsolutions-bills-manager.herokuapp.com/api/v1/accounts_payables/`, params)
    return data
  }

  return { getAccountsPayables, delAccountsPayables, createAccountsPayables }
}

export default useAccountsPayables