import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'
import ClientProvider from '@/providers/client.provider'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'FIMI',
	description: 'FIMI-Subsystem'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={cn('antialiased', font.className)}>
				<ClientProvider>{children}</ClientProvider>
			</body>
		</html>
	)
}
