
const config = {
  API_URL: window.location.href.includes('localhost') 
    ? 'http://localhost:7709' 
    : 'https://api.praxisco.us'
}

export default config