import React from 'react'
import Header from './Header'
import Side from './side/Side'

export default function PageLayout({ children }) {
	let [toggle, setToggle] = React.useState(false)

	function toggleSide() {
		setToggle((toggle = !toggle))
	}

	return (
		<>
			<Header toggle={toggle} onToggle={toggleSide} />
			<Side toggle={toggle} />
			<div className='container mx-auto'>
				<div className='flex justify-center'>
					<div className='w-[65%] content-wrap'>{children}</div>
				</div>
			</div>
		</>
	)
}
