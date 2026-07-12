import React from 'react'

import { formatTimeAgo } from '../../helpers/formateTimeAgo'

import styles from './styles.module.css'

const NewsItem = ({ item }) => {
	return (
		<li className={styles.item}>
			<div
				className={styles.wrapper}
				style={{ backgroundImage: `url(${item.image})` }}
			></div>
			<div className={styles.info}>
				<h3 className={styles.title}>{item.title}</h3>
				<p className={styles.extra}>
					{formatTimeAgo(item.published)} by {item.author}
				</p>
			</div>
		</li>
	)
}

export default NewsItem

// do-later
{
	/*

	--- Do component itself as it is used in different places ---

		<h3 className={styles.title}>{item.title}</h3>
		<p className={styles.extra}>
			{formatTimeAgo(item.published)} by {item.author}
		</p>

	 
	--- Do component Info --- 

		<div className={styles.info}>
			<h3 className={styles.title}>{item.title}</h3>
			<p className={styles.extra}>
				{formatTimeAgo(item.published)} by {item.author}
			</p>
		</div>

	--- Do component Image --- 

			<div
				className={styles.wrapper}
				style={{ backgroundImage: `url(${item.image})` }}
			></div>

	*/
}
