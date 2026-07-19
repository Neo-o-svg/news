import type { CategoriesType, IFilters } from '../../interfaces'

import Categories from '../Categories/Categories'
import Search from '../Search/Search'
import Slider from '../Slider/Slider'

import styles from './styles.module.css'

interface Props {
	filters: IFilters
	changeFilter: (key: string, value: string | number | null) => void
	isLoading: boolean
}

const NewsFilters = ({ filters, changeFilter, isLoading }: Props) => {
	return (
		<div className={styles.filters}>
			<Slider step={100}>
				<Categories
					selectedCategory={filters.category}
					setSelectedCategory={(category: CategoriesType | null) =>
						changeFilter('category', category)
					}
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
