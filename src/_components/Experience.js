import Project from './Project'

export default function Experience({ ExperienceItem }) {
	return (
		<div className='item'>
			<div className='name'>{ExperienceItem.name_employer}</div>
			<div className='position'>{ExperienceItem.position}</div>{' '}
			<div className='date-employment'>{ExperienceItem.dates_employment} </div>
			<div className='title'>Projects:</div>
			<div className='projects-wrap'>
				{ExperienceItem.projects.map((project, index) => {
					return <Project key={index} projectItem={project} />
				})}
			</div>
		</div>
	)
}
