import axios from 'axios'
import { useEffect, useState } from 'react'

const useRequest = ({ route, initialState = null }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(initialState)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isFetching = true
    axios
      .get(route)
      .then(({ data }) => {
        if (isFetching) {
          console.log(data)
          setData(data)
          setLoading(false)
        }
      })
      .catch(error => {
        setLoading(false)
        setError(error.toJSON())
        console.error(error)
      })
    return () => (isFetching = false)
  }, [route])

  return { data, error, loading }
}

export default useRequest
