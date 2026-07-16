import { useCallback } from 'react'

import { TOTAL_PAGES } from '../../constants/constants'

import type { IFilters } from '../../interfaces'

const usePagination = (
	filters: IFilters,
	changeFilter: (key: string, value: string | number | null) => void
) => {
	const handlePageChange = useCallback(
		(type: string, pageNumber: number = 1) => {
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
