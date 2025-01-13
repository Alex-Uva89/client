export default defineEventHandler((event) => {
    if (event.path === '/') {
      return sendRedirect(event, '/') 
    }
  })