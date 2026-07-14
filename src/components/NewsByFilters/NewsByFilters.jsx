import usePagination from '../../helpers/hooks/usePagination'

import Pagination from '../../components/Pagination/Pagination'
import NewsList from '../../components/NewsList/NewsList'
import NewsFilters from '../NewsFilters/NewsFilters'

import { TOTAL_PAGES } from '../../constants/constants'

import styles from './styles.module.css'

const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
	const { handlePageChange } = usePagination(filters, changeFilter)

	return (
		<section className={styles.section}>
			<NewsFilters
				filters={filters}
				changeFilter={changeFilter}
				isLoading={isLoading}
			/>
			<Pagination
				handlePageChange={handlePageChange}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
			/>

			<NewsList
				news={news}
				isLoading={isLoading}
			/>

			<Pagination
				handlePageChange={handlePageChange}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
			/>
		</section>
	)
}

export default NewsByFilters
