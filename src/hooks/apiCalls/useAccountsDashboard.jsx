import axios from 'axios';

const useAccountsDashboard = () => {

  const getAccountsDashboard = async (id = '') => {
    const data = await axios.get(`https://letsolutions-bills-manager.herokuapp.com/api/v1/dashboard`)
    return data.data
  }

  return { getAccountsDashboard }
}

export default useAccountsDashboard