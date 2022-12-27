import { Button, Form, Input, message, Select, Space } from "antd"
import {
	PlusOutlined,
	MinusCircleOutlined,
	DollarOutlined,
	UploadOutlined,
} from '@ant-design/icons'
import { useState } from "react"
import TextArea from "antd/es/input/TextArea"
import UploadFile from "./UploadFile"

export default function DynamicAddSection(){
    return (
        <Form.List name="sections">
						{(fields, { add, remove }) => (
							<>
								{fields.map((field, index) => {
									return (
										<Space
                                            className="d-flex"
											key={field.key}
											direction="vertical"
											// size={12}
											style={{ padding: 10 }}
										>
											<Form.Item
												name={[field.name, 'name']}
												label={`Section ${index +1}`}
											>
												<Input placeholder="Name" />
											</Form.Item>
											<Form.Item label="Sumary">
												<TextArea rows={2} />
											</Form.Item>
											<Form.Item
												label="Video"
												valuePropName="fileList"
											>
												<UploadFile button={<Button
														icon={
															<UploadOutlined />
														}
													>
														Choose File
													</Button>}>
												</UploadFile>
											</Form.Item>
											<Form.Item
												label="Document"
												valuePropName="fileList"
											>
												<UploadFile button={<Button
														icon={
															<UploadOutlined />
														}
													>
														Choose File
													</Button>}>
													
												</UploadFile>
											</Form.Item>
											<MinusCircleOutlined
												style={{
													height: 40,
													color: 'red',
												}}
												onClick={() => {
													remove(field.name)
												}}
											/>
										</Space>
									)
								})}
								<Form.Item>
									<Button
										className="d-flex align-items-center justify-content-center"
										icon={<PlusOutlined />}
										type="dashed"
										block
										onClick={() => {
											add()
										}}
									>
										Add
									</Button>
								</Form.Item>
							</>
						)}
					</Form.List>
    )
}