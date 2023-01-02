import { Button, Form, Input, Space } from 'antd'
import {
	PlusOutlined,
	MinusCircleOutlined,
	DollarOutlined,
	UploadOutlined,
} from '@ant-design/icons'
import { useEffect, useState } from 'react'
import FormInput from './FormInput'
export default function DynamicNewCategory({
	props,
	label,
	name,
	message,
	placeholder,
	setIsHaveCategory,
}: any) {
	const [count, setCount] = useState(-1)
	useEffect(()=>{
		if(count > -1)
			setIsHaveCategory(false)
		else
			setIsHaveCategory(true)
	},[count])
	return (
		<Form.List name={name}>
			{(fields, { add, remove }) => (
				<>
					{fields.map((field, index) => {
						return (
							<Space
								key={field.key}
								direction="horizontal"
								size={12}
								className="d-flex-row"
							>
                                <FormInput 
                                    className={
                                    index != 0 ? "px-3" : ''
                                    }
                                    label={
                                    index == 0 ? label : ''
                                    }
									name={[field.name, 'name']}
                                    placeholder={placeholder}
                                    message= {message}/>
                                <MinusCircleOutlined
										style={{
											height: 40,
											color: 'red',
										}}
										onClick={() => {
											remove(field.name)
											setCount(count - 1)
										}}
									/>
                                {count == index && <Form.Item className='d-flex'>
									<Button
										className="d-flex align-items-center justify-content-center"
										icon={<PlusOutlined />}
										type="dashed"
										block
										onClick={() => {
											add()
											setCount(count + 1)
										}}
									>
										Add
									</Button>
								</Form.Item>}
							</Space>
						)
					})}
                    {count == -1 && <Form.Item className='d-flex'>
									<Button
										className="d-flex align-items-center justify-content-center"
										icon={<PlusOutlined />}
										type="dashed"
										block
										onClick={() => {
											add()
											setCount(count + 1)
										}}
									>
										Other
									</Button>
								</Form.Item>
}
				</>
			)}
		</Form.List>
	)
}
