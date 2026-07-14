import withSkeleton from '../../helpers/hocs/withSkeleton'

import Image from '../Image/Image'
import PostSummary from '../ui/PostSummary/PostSummary'

import styles from './styles.module.css'

const NewsBanner = ({ item }) => {
	return (
		<div className={styles.banner}>
			<Image image={item.image || 'https://placehold.co/600x400/png'} />
			<PostSummary item={item} />
		</div>
	)
}

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1)

export default NewsBannerWithSkeleton
