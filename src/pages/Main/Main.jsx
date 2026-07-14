import { getNews } from '../../api/apiNews'

import useDebounce from '../../helpers/hooks/useDebounce'
import { useFetch } from '../../helpers/hooks/useFetch'
import { useFilters } from '../../helpers/hooks/useFilters'
import usePagination from '../../helpers/hooks/usePagination'

import NewsBannerWithSkeleton from '../../components/NewsBanner/NewsBanner'
import NewsListWithSkeleton from '../../components/NewsList/NewsList'
import Search from '../../components/Search/Search'
import Pagination from '../../components/Pagination/Pagination'
import CategoriesWithSkeleton from '../../components/Categories/Categories'

import { PAGE_SIZES, TOTAL_PAGES } from '../../constants/constants'

import styles from './styles.module.css'

const Main = () => {
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
		<main className={styles.main}>
			<CategoriesWithSkeleton
				selectedCategory={filters.category}
				setSelectedCategory={category => changeFilter('category', category)}
				isLoading={isLoading}
			/>

			<Search
				keywords={filters.keywords}
				setKeywords={keywords => changeFilter('keywords', keywords)}
			/>

			<NewsBannerWithSkeleton
				isLoading={isLoading}
				item={data?.news?.[0]}
			/>

			<Pagination
				handlePageChange={handlePageChange}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
			/>

			<NewsListWithSkeleton
				news={data?.news}
				isLoading={isLoading}
			/>

			<Pagination
				handlePageChange={handlePageChange}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
			/>
		</main>
	)
}

export default Main
