import axios from 'axios';

const useAccountsReceivables = () => {

  const getAccountsReceivables = async (id = '') => {
    const data = await axios.get(`https://letsolutions-bills-manager.herokuapp.com/api/v1/accounts_receivables/${id}`)
    return data
  }

  const delAccountsReceivables = async (id) => {
  
    const headers = {"Access-Control-Allow-Origin": "*"}

    axios
      .delete(`https://letsolutions-bills-manager.herokuapp.com/api/v1/accounts_receivables/${id}`, headers
)
      .then(response => {
        return response
      }).catch((error) => console.log(error))
  }

  const createAccountsReceivables = async (params) => {
    const data = await axios.post(`https://letsolutions-bills-manager.herokuapp.com/api/v1/accounts_receivables/`, params)
    return data
  }

  return { getAccountsReceivables, delAccountsReceivables, createAccountsReceivables }
}

export default useAccountsReceivables