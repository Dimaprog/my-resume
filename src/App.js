import React from 'react'
import './App.scss'
import './index.css'
import experience_data from './data/experience.json'
import Experience from './_components/Experience'
import PageLayout from './layout/PageLayout'

function App() {
	return (
		<div className='App'>
			<PageLayout>
				<h2 className='main-title mx-auto text-3xl'>Work Experience</h2>
				<div className='experience-wrap'>
					{experience_data.map((item, index) => {
						return <Experience key={index} ExperienceItem={item} />
					})}
				</div>
			</PageLayout>
		</div>
	)
}

export default App
