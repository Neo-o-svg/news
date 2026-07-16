import { forwardRef, type ForwardedRef } from 'react'

import { getCategories } from '../../api/apiNews'

import withSkeleton from '../../helpers/hocs/withSkeleton'

import { useFetch } from '../../helpers/hooks/useFetch'

import type { CategoriesApiResponse, CategoriesType } from '../../interfaces'

import CategoryButton from '../ui/CategoryButton/CategoryButton'

import styles from './styles.module.css'

interface Props {
	setSelectedCategory: (category: CategoriesType | null) => void
	selectedCategory: CategoriesType | null
}

const Categories = forwardRef(
	(
		{ setSelectedCategory, selectedCategory }: Props,
		ref: ForwardedRef<HTMLDivElement>
	) => {
		const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
			getCategories
		)

		if (!dataCategories) {
			return null
		}

		return (
			<div
				ref={ref}
				className={styles.categories}
			>
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
)

Categories.displayName = 'Categories'

const CategoriesWithSkeleton = withSkeleton<Props>(Categories, 'category', 5)

export default CategoriesWithSkeleton
