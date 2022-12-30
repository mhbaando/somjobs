import { useState } from 'react'
interface IPaginate {
  itemsPerPage: number
}
interface IReturnType {
  currentPage: number
  lastItem: number
  firstItem: number
  paginate: (page: number) => void
}
const usePagination = ({ itemsPerPage }: IPaginate): IReturnType => {
  const [currentPage, setCurrentPage] = useState(1)

  const lastItem = currentPage * itemsPerPage
  const firstItem = lastItem - itemsPerPage

  const paginate = (pageNumber: number): void => {
    setCurrentPage(pageNumber)
  }

  return {
    currentPage,
    lastItem,
    firstItem,
    paginate
  }
}

export default usePagination
