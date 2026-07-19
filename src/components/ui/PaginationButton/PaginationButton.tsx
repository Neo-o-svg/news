import { UseTheme } from '../../../context/ThemeContext'

import styles from './styles.module.css'

interface Props {
	disabled: boolean
	onClick: () => void
	variant?: string
	children: React.ReactNode
}

const PaginationButton = ({
	disabled,
	onClick,
	variant = 'page',
	children
}: Props) => {
	const { isDark } = UseTheme()

	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`${variant === 'arrow' ? styles.arrow : styles.pageNumber} ${isDark ? styles.dark : styles.light}`}
		>
			{children}
		</button>
	)
}

export default PaginationButton
