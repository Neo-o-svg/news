import type { INews } from '../../interfaces'

import Info from '../Info/Info'

import NewsImage from '../NewsImage/NewsImage'

import styles from './styles.module.css'

interface Props {
	item: INews
}

const NewsItem = ({ item }: Props) => {
	return (
		<li className={styles.item}>
			<NewsImage item={item} />
			<Info item={item} />
		</li>
	)
}

export default NewsItem
