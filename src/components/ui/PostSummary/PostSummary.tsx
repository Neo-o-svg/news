import { formatTimeAgo } from '../../../helpers/formateTimeAgo'

import type { INews } from '../../../interfaces'

import styles from './styles.module.css'

interface Props {
	item: INews
}

const PostSummary = ({ item }: Props) => {
	return (
		<>
			<h3 className={styles.title}>{item.title}</h3>
			<p className={styles.extra}>
				{formatTimeAgo(item.published)} by {item.author}
			</p>
		</>
	)
}

export default PostSummary
