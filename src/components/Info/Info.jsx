import PostSummary from '../ui/PostSummary/PostSummary'

import styles from './styles.module.css'

const Info = ({ item }) => {
	return (
		<div className={styles.info}>
			<PostSummary item={item} />
		</div>
	)
}

export default Info
