import Categories from '../Categories/Categories'
import Search from '../Search/Search'
import Slider from '../Slider/Slider'

import styles from './styles.module.css'

const NewsFilters = ({ filters, changeFilter, isLoading }) => {
	return (
		<div className={styles.filters}>
			<Slider step={100}>
				<Categories
					selectedCategory={filters.category}
					setSelectedCategory={category => changeFilter('category', category)}
					isLoading={isLoading}
				/>
			</Slider>

			<Search
				keywords={filters.keywords}
				setKeywords={keywords => changeFilter('keywords', keywords)}
			/>
		</div>
	)
}
export default NewsFilters
