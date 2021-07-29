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
            <div className="content-wrap container-fluid">
                <div className="row w-100">
                    <Side toggle={toggle} />
                    <div className="col content">
                        content
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
