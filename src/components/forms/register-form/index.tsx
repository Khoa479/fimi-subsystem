'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { format } from 'date-fns'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { addUser } from '@/actions/user/add'
import FormStatus from '@/components/forms/form-status'
import {
	Step1,
	Step1Foot,
	Step1Head
} from '@/components/forms/register-form/step-1'
import {
	Step2,
	Step2Foot,
	Step2Head
} from '@/components/forms/register-form/step-2'
import {
	Step3,
	Step3Foot,
	Step3Head
} from '@/components/forms/register-form/step-3'
import {
	Step4,
	Step4Foot,
	Step4Head
} from '@/components/forms/register-form/step-4'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { genId } from '@/lib/gen-id'
import { cn } from '@/lib/utils'
import { RegistrationSchema, registrationSchema } from '@/schema/registration'

const RegisterForm = () => {
	const form = useForm<RegistrationSchema>({
		resolver: zodResolver(registrationSchema),
		defaultValues: {
			id: '',
			fullName: '',
			address: '',
			affiliateChanel: '',
			bank: '',
			bankAccount: '',
			createdAt: '',
			email: '',
			gender: '',
			indentityNumber: '',
			phoneNumber: '',
			position: '',
			saleDirector: '',
			taxCode: '',
			tnc: false,
			workStatus: ''
		}
	})

	const [success, setSuccess] = useState<string | undefined>('')
	const [error, setError] = useState<string | undefined>('')

	const [step, setStep] = useState<number>(1)

	const { mutate: onRegister, isPending } = useMutation({
		mutationFn: async (values: RegistrationSchema) => {
			setSuccess('')
			setError('')

			const id = genId()

			values.id = `FIMI${id}`
			values.createdAt = format(new Date(), 'dd/MM/yyyy')

			form.reset()

			return await addUser(values)
		},
		onSuccess: data => {
			if (!data.error) {
				setSuccess(
					'Đăng ký tài mã giới thiệu thành công, truy cập email đã đăng ký để nhận mail xác nhận'
				)
			}

			if (data.error) {
				setError(data.error)
			}
		}
	})

	return (
		<Card
			className={cn('z-50 w-[450px] bg-background/80 backdrop-blur-md', {
				['hidden']: success
			})}
		>
			<CardHeader>
				<>
					{step === 1 && <Step1Head />}
					{step === 2 && <Step2Head />}
					{step === 3 && <Step3Head />}
					{step === 4 && <Step4Head />}
				</>
			</CardHeader>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(values => onRegister(values))}
					className='space-y-6'
				>
					<CardContent>
						<div className='space-y-4'>
							{step === 1 && (
								<Step1
									control={form.control}
									isPending={isPending}
								/>
							)}
							{step === 2 && <Step2 control={form.control} />}
							{step === 3 && <Step3 control={form.control} />}
							{step === 4 && <Step4 control={form.control} />}
						</div>
						<div className='pt-8'>
							<FormStatus
								type='error'
								message={error}
							/>
							<FormStatus message={success} />
							{step === 1 && (
								<Step1Foot
									step={step}
									setStep={setStep}
								/>
							)}
							{step === 2 && (
								<Step2Foot
									step={step}
									setStep={setStep}
								/>
							)}
							{step === 3 && (
								<Step3Foot
									step={step}
									setStep={setStep}
								/>
							)}
							{step === 4 && (
								<Step4Foot
									step={step}
									setStep={setStep}
								/>
							)}
						</div>
					</CardContent>
				</form>
			</Form>
		</Card>
	)
}

export default RegisterForm
