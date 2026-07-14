import Categories from '../Categories/Categories'
import Search from '../Search/Search'

import styles from './styles.module.css'

const NewsFilters = ({ filters, changeFilter, isLoading }) => {
	return (
		<div className={styles.filters}>
			<Categories
				selectedCategory={filters.category}
				setSelectedCategory={category => changeFilter('category', category)}
				isLoading={isLoading}
			/>

			<Search
				keywords={filters.keywords}
				setKeywords={keywords => changeFilter('keywords', keywords)}
			/>
		</div>
	)
}
export default NewsFilters
