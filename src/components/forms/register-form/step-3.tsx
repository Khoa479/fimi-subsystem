import React, { Dispatch, FC, SetStateAction } from 'react'
import { Control, FieldValues } from 'react-hook-form'

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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { bankList } from '@/constants/bank-list'

interface StepProps {
	control?: Control<any, any>
}

interface StepFootProps {
	step: number
	setStep: Dispatch<SetStateAction<number>>
}

export const Step3: FC<StepProps> = ({ control }) => {
	return (
		<>
			<FormField
				control={control}
				name='bankAccount'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Tài khoản ngân hàng</FormLabel>
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
				name='bank'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Ngân hàng</FormLabel>
						<Select
							onValueChange={field.onChange}
							defaultValue={field.value}
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder='Vui lòng chọn ngân hàng' />
								</SelectTrigger>
							</FormControl>
							<FormMessage />
							<SelectContent>
								{bankList.map(bank => (
									<SelectItem
										key={bank}
										value={bank}
									>
										{bank}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='taxCode'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Mã số thuế</FormLabel>
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

export const Step3Head = () => {
	return <CardTitle>Thông tin ngân hàng</CardTitle>
}

export const Step3Foot: FC<StepFootProps> = ({ step, setStep }) => {
	return (
		<div className='flex w-full items-center justify-between'>
			<Button
				variant='outline'
				onClick={e => {
					e.preventDefault()

					setStep(step - 1)
				}}
			>
				Prev
			</Button>
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
