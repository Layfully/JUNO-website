import React from 'react'
import Link from 'next/link'
import Text from './Text'

const SectionLink = props => {
    const style = props.isActive ? 'text-opacity-100' : 'text-opacity-50'

    return (
        <Text custom={style} hover="hover:text-opacity-80">
            <Link href={props.section.href} >
                <a onClick={props.onClick} >{props.section.title}</a>
            </Link>
        </Text>
    )
}


export default SectionLink