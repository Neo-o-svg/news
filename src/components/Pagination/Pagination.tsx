import type { IPaginationProps } from '../../interfaces'

import PageNumberList from '../PagiantionList/PagiantionList'

import PaginationButton from '../ui/PaginationButton/PaginationButton'

import styles from './styles.module.css'

const Pagination = ({
	totalPages,
	handlePageChange,
	currentPage
}: IPaginationProps) => {
	return (
		<div className={styles.pagination}>
			<PaginationButton
				variant="arrow"
				disabled={currentPage <= 1}
				onClick={() => handlePageChange('prev')}
			>
				{'<'}
			</PaginationButton>

			<PageNumberList
				totalPages={totalPages}
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			/>

			<PaginationButton
				variant="arrow"
				disabled={currentPage >= totalPages}
				onClick={() => handlePageChange('next')}
			>
				{'>'}
			</PaginationButton>
		</div>
	)
}

export default Pagination
