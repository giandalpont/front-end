import React, {Component } from 'react'

class Header extends Component {
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="inicial">GitHub Search</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="inicial">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="inicial">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Header