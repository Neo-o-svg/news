import styles from './styles.module.css'

const TYPE_CLASS = {
	banner: styles.banner,
	item: styles.item,
	category: styles.category
}

const Skeleton = ({ count = 1, type = 'banner' }) => {
	const itemClassName = TYPE_CLASS[type] ?? styles.category
	const items = Array.from({ length: count }, (_, index) => (
		<li
			key={index}
			className={itemClassName}
		/>
	))

	if (type === 'category') {
		return (
			<ul className={styles.list}>
				<div className={styles.categoryRow}>{items}</div>
			</ul>
		)
	}

	return <ul className={styles.list}>{items}</ul>
}

export default Skeleton
