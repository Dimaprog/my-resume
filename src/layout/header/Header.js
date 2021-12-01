
import React from 'react';

import './Header.scss';

export default function Header (props) {
    return (
        <div className="header-wrapp">
            <nav className="navbar fixed-top">
                <div className="container">
                    <div className="row w-100">
                        <div className="col-2 toogle-button-wrap">
                            <button type="button" onClick={ ()=> props.onToggle() } className="btn btn-info">
                                <i className="bi bi-person-lines-fill"></i>
                            </button>
                        </div>
                        <div className="col-10">
                            <h1 className="main-title text-center">My Resume</h1>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}