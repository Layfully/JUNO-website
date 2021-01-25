import React from 'react'
import Link from 'next/link'

const SectionLink = props => {
    const style = props.isActive ? 'text-opacity-100' : 'text-opacity-50'

    return (
        <Link href={props.section.href} >
            <a onClick={props.onClick} className={"text-white transition-colors duration-500 hover:text-opacity-80 " + style}>{props.section.title}</a>
        </Link>
    )
}


export default SectionLink