import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000'  // Changed from 3000 to 8000
})

export const getDrinks = async () => {
  try {
    const response = await api.get('/api/drinks')
    return response.data
  } catch (error) {
    console.error('Errore nel recupero delle bevande:', error)
    throw error
  }
}

