import axios from 'axios'

const api = axios.create({
  baseURL: 'https://cambusa-dev-700afd82d2d2.herokuapp.com/',
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

