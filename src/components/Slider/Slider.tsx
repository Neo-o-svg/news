import React, { useRef } from 'react'

import { UseTheme } from '../../context/ThemeContext'

import styles from './styles.module.css'

interface Props {
	children: React.ReactElement<{ ref?: React.Ref<HTMLElement> }>
	step?: number
}

const Slider = ({ children, step = 150 }: Props) => {
	const { isDark } = UseTheme()

	const sliderRef = useRef<HTMLElement | null>(null)

	const scrollLeft = () => {
		if (!sliderRef.current) {
			return
		}
		sliderRef.current.scrollLeft -= step
	}
	const scrollRight = () => {
		if (!sliderRef.current) {
			return
		}
		sliderRef.current.scrollLeft += step
	}

	const arrow_styles = `${styles.arrow}  ${isDark ? styles.dark : styles.light}`

	return (
		<div className={styles.slider}>
			<button
				onClick={scrollLeft}
				className={`${arrow_styles}`}
			>
				{'<'}
			</button>
			{React.cloneElement(children, { ref: sliderRef })}
			<button
				onClick={scrollRight}
				className={`${arrow_styles}`}
			>
				{'>'}
			</button>
		</div>
	)
}

export default Slider
