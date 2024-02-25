import { useMemo, useState } from 'react'
import { getAllUsers } from '../../service/users'

export const useUser = () => {
  const [data, setData] = useState([])
  useMemo(() => {
    const fetchData = async () => {
      const response = await getAllUsers()
      setData(response)
    }
    fetchData()
  }, [])
  return { data }
}
