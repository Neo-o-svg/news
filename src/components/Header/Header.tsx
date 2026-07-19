import { themeIcons } from '../../assets'
import { UseTheme } from '../../context/ThemeContext'

import { formateDate } from '../../helpers/formateDate'

import styles from './styles.module.css'

const Header = () => {
	const { isDark, toggleTheme } = UseTheme()

	return (
		<header
			className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
		>
			<div className={styles.info}>
				<h1 className={styles.title}>NEWS REACTIFY</h1>
				{/* лучше реализовать с использованием useEffect, state и interval для тог чтобы эта дата менялась */}
				<p className={styles.date}>{formateDate(new Date())}</p>
			</div>

			<img
				src={isDark ? themeIcons.light : themeIcons.dark}
				alt="theme"
				width={30}
				onClick={toggleTheme}
			/>
		</header>
	)
}

export default Header
