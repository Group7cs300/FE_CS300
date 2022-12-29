import { Button, Form, message, Select, Space } from "antd"
import {
	PlusOutlined,
	MinusCircleOutlined,
	DollarOutlined,
	UploadOutlined,
} from '@ant-design/icons'
import { useState } from "react"
export default function DynamicSelect({props,label,name,message,placeholder, choices, isRequire}:any){
	let nameDefaut
	const [count,setCount] = useState(0)
    return(
        <Form.List
						name={name}
						initialValue={[{ name: nameDefaut }]}
					>
						{(fields, { add, remove }) => (
							<>
								{fields.map((field, index) => {
									return (
										<Space
											key={field.key}
											direction="horizontal"
											size={12}
										>
											<Form.Item
                                                className={
													index != 0 ? "px-3" : ''
												}
												name={[field.name, 'name']}
												label={
													index == 0 ? label : ''
												}
												rules={[
													{
														required: isRequire,
														message:
															message,
													},
												]}
											>
												<Select placeholder={placeholder} >
                                                    {choices.map((choice:any)=>(
                                                        <Select.Option  className='px-3' key={choice.uuid} value={choice.uuid}>
														    {choice.name}
													    </Select.Option>
                                                    ))
                                                    }
													
												</Select>
											</Form.Item>
											{count != 0 && <MinusCircleOutlined
												style={{
													height: 40,
													color: 'red',
												}}
												onClick={() => {
													remove(field.name)
                                                    setCount(count-1)
												}}
											/>}
											{index == count && <Form.Item className="d-flex align-items-center justify-content-center">
												<Button
													className="d-flex align-items-center justify-content-center"
													icon={<PlusOutlined />}
													type="dashed"
													block
													onClick={() => {
														add()
                                                        setCount(count+1)
													}}
												>
													Add
												</Button>
											</Form.Item>
                                            }
										</Space>
									)
								})}
								{count == -1 && <Form.Item className="d-flex align-items-center justify-content-center">
										<Button
											className="d-flex align-items-center justify-content-center"
											icon={<PlusOutlined />}
											type="dashed"
											block
											onClick={() => {
												add()
												setCount(count+1)
											}}
										>
											Add
										</Button>
									</Form.Item>
									}
										
							</>
						)}
					</Form.List>
    )
}