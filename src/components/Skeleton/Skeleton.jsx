import styles from './styles.module.css'

const TYPE_CLASS = {
	banner: styles.banner,
	item: styles.item,
	category: styles.category
}

const Skeleton = ({ count = 1, type = 'banner', direction = 'column' }) => {
	const itemClassName = TYPE_CLASS[type] ?? styles.category
	const items = Array.from({ length: count }, (_, index) => (
		<li
			key={index}
			className={itemClassName}
		/>
	))

	if (type === 'category') {
		return (
			<ul
				className={direction === 'column' ? styles.columnList : styles.rowList}
			>
				<div className={styles.categoryRow}>{items}</div>
			</ul>
		)
	}

	return (
		<ul className={direction === 'column' ? styles.columnList : styles.rowList}>
			{items}
		</ul>
	)
}

export default Skeleton
