import Info from '../Info/Info'
import NewsImage from '../NewsImage/NewsImage'

import styles from './styles.module.css'

const NewsItem = ({ item }) => {
	return (
		<li className={styles.item}>
			<NewsImage item={item} />
			<Info item={item} />
		</li>
	)
}

export default NewsItem
