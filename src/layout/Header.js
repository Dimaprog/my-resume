import React from 'react'

export default function Header(props) {
	return (
		<div className='header-wrap h-[60px] w-full flex flex-row bg-gray-600'>
			<div className='toggle-button-wrap w-1/4 flex h-[100%] items-center'>
				<button
					type='button'
					onClick={() => props.onToggle()}
					className='mx-auto rounded w-[30px] bg-cyan-600 hover:bg-cyan-400'
				>
					<i className='bi bi-person-lines-fill'></i>
				</button>
			</div>
			<div className='header-text-wrap w-3/4'>
				<div className='flex h-[100%] items-center'>
					<div className='w-[65%]'>
						<h1 className='main-title text-center text-white text-3xl'>
							My Resume
						</h1>
					</div>
				</div>
			</div>
		</div>
	)
}
