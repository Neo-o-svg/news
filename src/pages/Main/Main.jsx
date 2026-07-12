import { getCategories, getNews } from '../../api/apiNews'

import useDebounce from '../../helpers/hooks/useDebounce'
import { useFetch } from '../../helpers/hooks/useFetch'
import { useFilters } from '../../helpers/hooks/useFilters'

import { PAGE_SIZES, TOTAL_PAGES } from '../../constants/constants'

import NewsBanner from '../../components/NewsBanner/NewsBanner'
import NewsList from '../../components/NewsList/NewsList'
import Categories from '../../components/Categories/Categories'
import Search from '../../components/Search/Search'
import Pagination from '../../components/Pagination/Pagination'

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

	const { data: dataCategories } = useFetch(getCategories)

	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			changeFilter('page_number', filters.page_number + 1)
		}
	}

	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			changeFilter('page_number', filters.page_number - 1)
		}
	}

	const handlePageClick = pageNumber => {
		changeFilter('page_number', pageNumber)
	}

	return (
		<main className={styles.main}>
			{dataCategories ? (
				<Categories
					categories={dataCategories.categories}
					selectedCategory={filters.category}
					setSelectedCategory={category => changeFilter('category', category)}
				/>
			) : null}

			<Search
				keywords={filters.keywords}
				setKeywords={keywords => changeFilter('keywords', keywords)}
			/>

			<NewsBanner
				isLoading={isLoading}
				item={data?.news?.[0]}
			/>

			<Pagination
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				handlePageClick={handlePageClick}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
			/>

			<NewsList
				news={data?.news}
				isLoading={isLoading}
			/>

			<Pagination
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				handlePageClick={handlePageClick}
				totalPages={TOTAL_PAGES}
				currentPage={filters.page_number}
			/>
		</main>
	)
}

export default Main

{
	/* why is not working -> compare and eliminate errors 
		-> do commit
		-> do push
		-> do commented tasks 
		-> push
		-> merge
		-> pull
*/
}

// do-later
{
	/*
	--- do like 1 func and give the type - next, prev 
	depends on the type that func would click next or prev 
	--- 

		const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			changeFilter('page_number', filters.page_number + 1)
		}
	}

	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			changeFilter('page_number', filters.page_number - 1)
		}
	}


	--- do custom hook and name like usePagination / usePaginationNews ---

		const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			changeFilter('page_number', filters.page_number + 1)
		}
	}

	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			changeFilter('page_number', filters.page_number - 1)
		}
	}

	const handlePageClick = pageNumber => {
		changeFilter('page_number', pageNumber)
	}

		--- Move receiving categories directly to Category component 
		do widget, and all logic is directly in Category 
		---
	
		const { data: dataCategories } = useFetch(getCategories)
	

		--- do Skeleton for categories ---
	
	
	
	*/
}
