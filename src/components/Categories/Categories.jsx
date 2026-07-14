import { getCategories } from '../../api/apiNews'

import withSkeleton from '../../helpers/hocs/withSkeleton'
import { useFetch } from '../../helpers/hooks/useFetch'

import CategoryButton from '../ui/CategoryButton/CategoryButton'

import styles from './styles.module.css'

const Categories = ({ setSelectedCategory, selectedCategory }) => {
	const { data: dataCategories } = useFetch(getCategories)

	if (!dataCategories) {
		return null
	}

	return (
		<div className={styles.categories}>
			<CategoryButton
				category={'All'}
				isActive={!selectedCategory}
				onClick={() => setSelectedCategory('all')}
			/>
			{dataCategories.categories.map(category => {
				const isActive = selectedCategory === category
				return (
					<CategoryButton
						key={category}
						category={category}
						isActive={isActive}
						onClick={() => setSelectedCategory(category)}
					/>
				)
			})}
		</div>
	)
}

const CategoriesWithSkeleton = withSkeleton(Categories, 'category', 5)

export default CategoriesWithSkeleton
