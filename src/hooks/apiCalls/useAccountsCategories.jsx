import axios from 'axios';

const useAccountsCategories = () => {

  const getAccountsCategories = async (id = '') => {
    const data = await axios.get(`https://letsolutions-bills-manager.herokuapp.com/api/v1/categories/${id}`)
    return data.data
  }

  return { getAccountsCategories }
}

export default useAccountsCategories