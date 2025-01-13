import axios from 'axios'

const config = useRuntimeConfig();

const api = axios.create({
  baseURL: config.public.apiBase,
})

export const getCategories = async () => {
  try {
    const response = await api.get('/categories')
    return response.data
  } catch (error) {
    console.error('Errore nel recupero delle categorie:', error)
    throw error
  }
}


