import RegisterForm from '@/components/forms/register-form'

export default async function Home() {
	return (
		<div className='flex flex-col items-center gap-5'>
			<h2 className='text-ce text-4xl font-bold tracking-wider text-primary'>
				Đăng ký mã giới thiệu
			</h2>
			<RegisterForm />
		</div>
	)
}
