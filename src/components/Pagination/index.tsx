/* eslint-disable multiline-ternary */
interface IPagination {
  totalPages: number
  currentPage: number
  itemsPerPage: number
  paginate: (pageNumber: number) => void
}
const Pagination: React.FC<IPagination> = ({
  itemsPerPage,
  currentPage,
  totalPages,
  paginate
}): React.ReactElement => {
  const pageNumbers = []

  for (let i = 0; i < Math.ceil(totalPages / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className='flex items-center justify-center w-full'>
      <ul className='flex items-center justify-between gap-5'>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number + 1)}
            className={`${
              currentPage === number + 1 ? 'bg-blue-200' : 'bg-blue-50'
            } w-7 h-7 text-md rounded-md flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out `}
          >
            {number + 1}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
