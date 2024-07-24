import { FC, PropsWithChildren } from 'react'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return <div className='bg-foreground/5'>{children}</div>
}

export default MainLayout
