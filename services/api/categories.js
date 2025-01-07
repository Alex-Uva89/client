import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000' 
})

export const getCategories = async () => {
  try {
    const response = await api.get('/api/categories')
    return response.data
  } catch (error) {
    console.error('Errore nel recupero delle categorie:', error)
    throw error
  }
}
