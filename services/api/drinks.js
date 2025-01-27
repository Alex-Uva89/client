import axios from 'axios'


export const getDrinks = async () => {
  try {
    const response = await axios.get('/api/drinks')
    return response.data
  } catch (error) {
    console.error('Errore nel recupero delle bevande:', error)
    throw error
  }
}

