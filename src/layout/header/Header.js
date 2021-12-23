
import React from 'react';

import './Header.scss';

export default function Header (props) {
    return (
        <div className="header-wrap">
            <nav className="navbar fixed-top">
                <div className="container">
                    <div className="row w-100">
                        <div className="col-10 header">
                            <div className="toogle-button-wrap">
                                <button type="button" onClick={ ()=> props.onToggle() } className="btn">
                                    <i className="bi bi-person-lines-fill"></i>
                                </button>
                            </div>
                            <div className="header-text-wrap">
                                <h1 className="main-title text-center">My Resume</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}