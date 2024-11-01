import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import rootReducer from './reducers';
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import store from './store'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
reportWebVitals()
