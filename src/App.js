import React from 'react';
import './App.scss';
import Header from './layout/header/Header';
import Side from './layout/side/Side';

function App() {

    let [ toggle, setToggle ] = React.useState( false );

    function toggleSide() {
        setToggle(
            toggle = !toggle
        )
    }

    return (
        <div className="App">
            <Header toggle={toggle} onToggle={toggleSide} />
            <Side toggle={toggle} />
            <div className="container">
                <div className="row d-flex justify-content-center w-100">
                    <div className="col col-sm-12 col-md-10 col-lg-10 content-wrap">
                        content
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
