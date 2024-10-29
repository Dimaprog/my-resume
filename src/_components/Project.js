export default function Project({ projectItem }) {
	return (
		<div className='project'>
			<div className='name'>{projectItem.name}</div>
			<div className='role'>{projectItem.role}</div>
			<div className='technologies'>{projectItem.technologies}</div>
		</div>
	)
}
