import styles from './styles.module.css'

const NewsImage = ({ item }) => {
	return (
		<div
			className={styles.wrapper}
			style={{ backgroundImage: `url(${item.image})` }}
		></div>
	)
}

export default NewsImage
