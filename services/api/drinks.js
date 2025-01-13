import axios from 'axios'

const config = useRuntimeConfig();

const api = axios.create({
  baseURL: config.public.apiBase,
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

