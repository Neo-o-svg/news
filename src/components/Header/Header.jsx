import { formateDate } from '../../helpers/formateDate'

import styles from './styles.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>NEWS REACTIFY</h1>
			{/* лучше реализовать с использованием useEffect, state и interval для тог чтобы эта дата менялась */}
			<p className={styles.date}>{formateDate(new Date())}</p>
		</header>
	)
}

export default Header
