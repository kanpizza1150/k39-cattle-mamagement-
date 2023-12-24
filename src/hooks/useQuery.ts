import { useState } from "react"

const useQuery = ({ get }) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState([])

  const getData = async (
    config: any,
    { error, success, successCallback, errorCallbaack }: any
  ) => {
    setLoading(true)
    try {
      const res = await get()
      console.log("res", res)
      setData(res)
      // error && message.success(success)
      successCallback?.()
    } catch (e) {
      setError(e)
      // error && message.error(e?.response?.data?.message || error)
      errorCallbaack?.()
    }
    setLoading(false)
  }

  return { loading, data, request: getData, error }
}

export default useQuery
