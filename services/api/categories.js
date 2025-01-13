import axios from 'axios'


const api = axios.create({
  baseURL: 'https://cambusa-dev-700afd82d2d2.herokuapp.com/',
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


