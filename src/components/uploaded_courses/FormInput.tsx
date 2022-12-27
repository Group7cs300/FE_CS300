import { Form, Input } from 'antd'

export default function FormInput({ props,className, label, name, message,placeholder }: any) {
	return (
		<Form.Item
			className={className}
			label={label}
			name={name}
			rules={[
				{
					required: true,
					message: message,
				},
			]}
		>
			<Input placeholder={placeholder}/>
		</Form.Item>
	)
}
