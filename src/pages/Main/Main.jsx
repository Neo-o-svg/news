import React, { useEffect, useState } from 'react'

import { getCategories, getNews } from '../../api/apiNews'

import NewsBanner from '../../components/NewsBanner/NewsBanner'
import NewsList from '../../components/NewsList/NewsList'
import Categories from '../../components/Categories/Categories'
import Search from '../../components/Search/Search'

import Skeleton from '../../components/Skeleton/Skeleton'
import Pagination from '../../components/Pagination/Pagination'

import styles from './styles.module.css'
import useDebounce from '../../helpers/hooks/useDebounce'

const Main = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [categories, setCategories] = useState([])
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [keywords, setKeywords] = useState([])

	const debouncedKeywords = useDebounce(keywords, 1500)

	const totalPages = 10
	const pageSize = 10

	const fetchNews = async currentPage => {
		try {
			setIsLoading(true)
			const response = await getNews({
				page_number: currentPage,
				page_size: pageSize,
				category: selectedCategory === 'All' ? null : selectedCategory,
				keywords: debouncedKeywords
			})
			setNews(response.news)
			setIsLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	const fetchCategories = async () => {
		try {
			const response = await getCategories()
			setCategories(['All', ...response.categories])
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		fetchCategories()
	}, [])

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		fetchNews(currentPage)
	}, [currentPage, selectedCategory, debouncedKeywords])

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	const handlePageClick = pageNumber => {
		setCurrentPage(pageNumber)
	}

	return (
		<main className={styles.main}>
			<Categories
				categories={categories}
				setSelectedCategory={setSelectedCategory}
				selectedCategory={selectedCategory}
			/>

			<Search
				keywords={keywords}
				setKeywords={setKeywords}
			/>

			{news.length > 0 && !isLoading ? (
				<NewsBanner item={news[0]} />
			) : (
				<Skeleton
					count={1}
					type="banner"
				/>
			)}

			<Pagination
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				handlePageClick={handlePageClick}
				totalPages={totalPages}
				currentPage={currentPage}
			/>

			{!isLoading ? (
				<NewsList news={news} />
			) : (
				<Skeleton
					count={10}
					type="item"
				/>
			)}

			<Pagination
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				handlePageClick={handlePageClick}
				totalPages={totalPages}
				currentPage={currentPage}
			/>
		</main>
	)
}

export default Main
