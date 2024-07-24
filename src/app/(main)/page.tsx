import RegisterForm from '@/components/forms/register-form'

export default async function Home() {
	return (
		<div className='flex h-screen w-full items-center justify-center'>
			<RegisterForm />
		</div>
	)
}
