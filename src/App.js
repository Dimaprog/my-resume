import React from 'react';
import './App.scss';
import Header from './layout/header/Header';
import Side from './layout/side/Side';
import experience_data from './data/experience.json'

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
                    <div className="col col-sm-12 col-md-10 col-lg-8 content-wrap">
                        <h3 className='title'>Work Experience</h3>
                        <div className="experience-wrap">
                            {
                                experience_data.map((item) => {
                                    console.log(item)
                                   return(
                                       <div className='item'>
                                           <div className='name'>{item.name_employer}</div>
                                           <div className='position'>{item.position}</div>
                                           <div className='date-employment'>{item.dates_employment}</div>
                                       </div>
                                   );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
