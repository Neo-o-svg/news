import styles from './styles.module.css'

const PaginationButton = ({
	children,
	disabled,
	onClick,
	variant = 'page'
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={variant === 'arrow' ? styles.arrow : styles.pageNumber}
		>
			{children}
		</button>
	)
}

export default PaginationButton
