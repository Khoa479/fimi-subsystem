import { SelectValue } from '@radix-ui/react-select'
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger
} from '@/components/ui/select'
import { cityList } from '@/constants/city-list'

interface StepProps {
	control?: Control<any, any>
}

interface StepFootProps {
	step: number
	setStep: Dispatch<SetStateAction<number>>
}

export const Step2: FC<StepProps> = ({ control }) => {
	return (
		<>
			<FormField
				control={control}
				name='indentityNumber'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Số căn cước công dân</FormLabel>
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
				name='birthDate'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Ngày sinh</FormLabel>
						<FormControl>
							<Input
								{...field}
								placeholder='dd/MM/YYYY'
								className='border-foreground/20'
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='gender'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Giới tính</FormLabel>
						<Select
							onValueChange={field.onChange}
							defaultValue={field.value}
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder='Vui lòng chọn giới tính' />
								</SelectTrigger>
							</FormControl>
							<FormMessage />
							<SelectContent>
								<SelectItem value='Nam'>Nam</SelectItem>
								<SelectItem value='Nữ'>Nữ</SelectItem>
								<SelectItem value='Khác'>Khác...</SelectItem>
							</SelectContent>
						</Select>
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name='address'
				render={({ field }) => (
					<FormItem>
						<FormLabel>Tỉnh thành công tác</FormLabel>
						<Select
							onValueChange={field.onChange}
							defaultValue={field.value}
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder='Vui lòng chọn tỉnh/thành' />
								</SelectTrigger>
							</FormControl>
							<FormMessage />
							<SelectContent>
								{cityList.map(city => (
									<SelectItem
										value={city}
										key={city}
									>
										{city}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</FormItem>
				)}
			/>
		</>
	)
}

export const Step2Head = () => {
	return <CardTitle>Thông tin thêm</CardTitle>
}

export const Step2Foot: FC<StepFootProps> = ({ step, setStep }) => {
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
