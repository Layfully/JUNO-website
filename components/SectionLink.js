import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

class SectionLink extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.onClick(this.props.section.key)
    }

    render() {

        const style = this.props.isActive ? 'text-opacity-100' : 'text-opacity-50'

        return (
            <Link href={this.props.section.href} >
                <a onClick={this.handleClick} className={"ml-auto text-white transition-colors duration-500 hover:text-opacity-80 " + style}>{this.props.section.title}</a>
            </Link>
        )
    }
}


export default withRouter(SectionLink)