import PaginationButton from '../ui/PaginationButton/PaginationButton'

import styles from './styles.module.css'

interface Props {
	totalPages: number
	currentPage: number
	handlePageChange: (type: string, pageNumber?: number) => void
}

const PageNumberList = ({
	totalPages,
	currentPage,
	handlePageChange
}: Props) => {
	return (
		<div className={styles.list}>
			{Array.from({ length: totalPages }, (_, index) => {
				const page = index + 1
				return (
					<PaginationButton
						key={page}
						onClick={() => handlePageChange('click', page)}
						disabled={page === currentPage}
					>
						{page}
					</PaginationButton>
				)
			})}
		</div>
	)
}

export default PageNumberList
