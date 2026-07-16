import styles from './styles.module.css'

const CategoryButton = ({ category, isActive, onClick }) => {
	return (
		<button
			key={category}
			className={isActive ? styles.active : styles.item}
			onClick={onClick}
		>
			{category}
		</button>
	)
}

export default CategoryButton
