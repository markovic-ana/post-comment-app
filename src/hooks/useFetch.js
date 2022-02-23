import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    requestData()
  }, [])

  async function requestData() {
    const response = await fetch(url)
    const json = await response.json()
    setData(json)
    setLoaded(true)
  }

  return [data, loaded]
}

export default useFetch
