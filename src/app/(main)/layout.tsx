import { FC, PropsWithChildren } from 'react'

import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='h-full'>
			<Header />
			<div className='flex flex-1 flex-col gap-4 lg:gap-0'>
				<div className='flex-1'>{children}</div>

				<Footer />
			</div>
		</div>
	)
}

export default MainLayout
