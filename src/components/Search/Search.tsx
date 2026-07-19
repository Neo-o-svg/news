import { UseTheme } from '../../context/ThemeContext'

import styles from './styles.module.css'

interface Props {
	keywords: string
	setKeywords: (keywords: string) => void
}

const Search = ({ keywords, setKeywords }: Props) => {
	const { isDark } = UseTheme()
	return (
		<div className={`${styles.search}  ${isDark ? styles.dark : styles.light}`}>
			<input
				className={`${styles.input} ${isDark ? styles.dark : styles.light}`}
				type="text"
				value={keywords}
				onChange={e => setKeywords(e.target.value)}
				placeholder="News"
			/>
		</div>
	)
}

export default Search
