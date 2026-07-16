import type { INews } from '../../interfaces'

import Image from '../Image/Image'

import PostSummary from '../ui/PostSummary/PostSummary'

import styles from './styles.module.css'

interface Props {
	item: INews
}

const NewsBanner = ({ item }: Props) => {
	return (
		<div className={styles.banner}>
			<Image image={item.image || 'https://placehold.co/600x400/png'} />
			<PostSummary item={item} />
		</div>
	)
}

export default NewsBanner
