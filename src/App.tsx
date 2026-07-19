import Header from './components/Header/Header'
import { UseTheme } from './context/ThemeContext'

import Main from './pages/Main/Main'

function App() {
	const { isDark } = UseTheme()

	return (
		<div className={`app ${isDark ? 'dark' : 'light'}`}>
			<Header />
			<div className="container">
				<Main />
			</div>
		</div>
	)
}

export default App
