import { useContext } from 'react'
import { IntalnetContext } from '../context/intalnetProvider'

export const useIntalnetContext = () => {
  return useContext(IntalnetContext)
}
