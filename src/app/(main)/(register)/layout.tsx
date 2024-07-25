import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

const RegisterLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='relative flex w-full flex-col items-center justify-center'>
			<div className='container flex flex-1 items-center justify-center gap-4'>
				<Image
					src='/banner.png'
					width={500}
					height={500}
					alt='banner'
					className='hidden h-[calc(100vh-4rem)] w-1/2 lg:block'
				/>
				{children}
			</div>
		</div>
	)
}

export default RegisterLayout
