import { useMemo } from 'react'
import classNames from 'classnames'

const Text = (props) => {
    let tagClasses = classNames({
        'text-sm': props.size === 'sm',
        'text-base': props.size === 'body-sm',
        'text-2xl': props.size === 'body',
        'text-4xl': props.size === 'h2',
        'text-6xl': props.size === 'h1',
        'text-orange text-opacity-60': props.color === 'orange',
        'text-white text-opacity-50': props.color === 'white',
        'text-orange': props.color === 'true-orange',
        'text-orangeError': props.color === 'error'
    })
    if (props.custom) {
        tagClasses += ' ' + props.custom
    }
    if (props.hover) {
        tagClasses += ' duration-300 ease-in'
        typeof (props.hover) === "string" ? tagClasses += ' ' + props.hover : tagClasses += ' transition-colors hover:text-opacity-100'
    }

    const CustomTag = useMemo(() => props.size.charAt(0) === 'h' ? props.size : 'p', [props.size]);

    return <CustomTag className={tagClasses}>{props.children}</CustomTag>
}

Text.defaultProps = {
    color: 'white',
    size: 'body',
}

export default Text