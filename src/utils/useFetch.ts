import { useEffect, useState } from 'react'

const useFetch = (url: string) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    void requestData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function requestData() {
    try {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  return [data, loading, error]
}

export default useFetch
