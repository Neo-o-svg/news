import { getNews } from '../../api/apiNews'

import usePagination from '../../helpers/hooks/usePagination'
import { useFilters } from '../../helpers/hooks/useFilters'
import useDebounce from '../../helpers/hooks/useDebounce'
import { useFetch } from '../../helpers/hooks/useFetch'

import PaginationWrapper from '../PaginationWrapper/PaginationWrapper'
import NewsList from '../../components/NewsList/NewsList'
import NewsFilters from '../NewsFilters/NewsFilters'

import { PAGE_SIZES, TOTAL_PAGES } from '../../constants/constants'

import styles from './styles.module.css'

const NewsByFilters = () => {
	const { filters, changeFilter } = useFilters({
		page_number: 1,
		page_size: PAGE_SIZES,
		category: null,
		keywords: ''
	})
	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const { data, isLoading } = useFetch(getNews, {
		...filters,
		keywords: debouncedKeywords
	})

	const { handlePageChange } = usePagination(filters, changeFilter)

	return (
		<section className={styles.section}>
			<NewsFilters
				filters={filters}
				changeFilter={changeFilter}
				isLoading={isLoading}
			/>
			// do component news list with pagination
			<PaginationWrapper
				top
				bottom
				handlePageChange={handlePageChange}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
			>
				<NewsList
					news={data?.news}
					isLoading={isLoading}
				/>
			</PaginationWrapper>
		</section>
	)
}

export default NewsByFilters
