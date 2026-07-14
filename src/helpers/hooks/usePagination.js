import { useCallback } from 'react'

import { TOTAL_PAGES } from '../../constants/constants'

const usePagination = (filters, changeFilter) => {
	const handlePageChange = useCallback(
		(type, pageNumber = 1) => {
			const currentPage = filters.page_number

			switch (type) {
				case 'next':
					if (filters.page_number < TOTAL_PAGES) {
						changeFilter('page_number', currentPage + 1)
					}
					break

				case 'prev':
					if (filters.page_number > 1) {
						changeFilter('page_number', currentPage - 1)
					}
					break

				case 'click':
					changeFilter('page_number', pageNumber)
					break

				default:
					break
			}
		},
		[changeFilter, filters]
	)

	return { handlePageChange }
}

export default usePagination
