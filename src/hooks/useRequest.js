import axios from 'axios'
import { useEffect, useState } from 'react'

const useRequest = ({ route, initialState = null }) => {
  const [data, setData] = useState(initialState)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get(route)
      .then(({ data }) => {
        console.log(data)
        setData(data)
      })
      .catch(error => {
        setError(JSON.parse(JSON.stringify(error)))
        console.error(error)
      })
  }, [route])

  return { data, error }
}

export default useRequest
