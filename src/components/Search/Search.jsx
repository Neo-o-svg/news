import styles from './styles.module.css'

const Search = ({ keywords, setKeywords }) => {
	return (
		<div className={styles.search}>
			<input
				className={styles.input}
				type="text"
				value={keywords}
				onChange={e => setKeywords(e.target.value)}
				placeholder="News"
			/>
		</div>
	)
}

export default Search
