import React, { Component } from 'react'


class Header extends Component {
    render() {
        console.log(this.props)
        return (
            <Header>
                <h1>{this.props.username}s Color Palette</h1>
                <input type="text" onChange={this.props.method} />
            </Header>
        )
    }
}

export default Header