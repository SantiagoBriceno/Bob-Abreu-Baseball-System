const getRunningCordinates = async () => {
  const response = await fetch('http://localhost:3000/api/v1/estadisticas/running/t/data', {
    method: 'GET'
  })
  return response.json()
}

export default {
  getRunningCordinates
}
