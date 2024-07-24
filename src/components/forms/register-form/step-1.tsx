import { Dispatch, FC, SetStateAction } from 'react'
import { Control } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { CardTitle } from '@/components/ui/card'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface Step1Props {
	control?: Control<any, any>
}

interface Step1FootProps {
	step: number
	setStep: Dispatch<SetStateAction<number>>
}

export const Step1: FC<Step1Props> = ({ control }) => {
	return (
		<>
			<FormField
				control={control}
				name='fullName'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Họ và tên</FormLabel>
						<FormControl>
							<Input
								{...field}
								className='border-foreground/20'
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='email'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Email</FormLabel>
						<FormControl>
							<Input
								{...field}
								className='border-foreground/20'
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='phoneNumber'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Số điện thoại</FormLabel>
						<FormControl>
							<Input
								{...field}
								className='border-foreground/20'
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	)
}

export const Step1Head = () => {
	return <CardTitle>Thông tin chung</CardTitle>
}

export const Step1Foot: FC<Step1FootProps> = ({ step, setStep }) => {
	return (
		<div className='flex w-full items-center justify-end'>
			<Button
				onClick={e => {
					e.preventDefault()

					setStep(step + 1)
				}}
			>
				Next
			</Button>
		</div>
	)
}
