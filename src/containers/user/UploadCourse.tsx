import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Form, Input, Button, InputNumber, Switch, message } from 'antd'
import client from '../../client/axios'
import FormInput from '../../components/uploaded_courses/FormInput'
import DynamicSelect from '../../components/uploaded_courses/DynamicSelect'
import DynamicInput from '../../components/uploaded_courses/DynamicInput'
import UploadFile from '../../components/uploaded_courses/UploadFile'
import DynamicAddSection from '../../components/uploaded_courses/DynamicAddSection'
import { RcFile } from 'antd/es/upload'

export default function UploadCourse() {
	interface Category {
		uuid: String
		name: String
	}
	const { user_uuid } = useParams()
	const { course_id } = useParams()
	const { TextArea } = Input
	const [categories, setCategories] = useState<Category[]>([])
	const [coverImage, setCoverImage] = useState<RcFile[]>([])
	const [description, setDescription] = useState('')
	const [newCategory, setNew] = useState<Category[]>([])
	useEffect(() => {
		async function fetchCategory() {
			client
				.get<Category[]>(`/categories`)
				.then((response) => {
					setCategories(response.data)
				})
				.catch((error) => {
					message.error(error)
				})
		}
		fetchCategory()
	}, [categories])
	const [isUpload, setIsUpload] = useState(true)
	const onFinish = (values: any) => {
		let new_categories: Category[] = []
		if (values.new_categories.length != 0) {
			values.new_categories.map((new_category: any) => {
				for (var i = 0; i < categories.length; ++i) {
					if (categories[i].name === new_category.name) {
						break
					}
					if (i === categories.length - 1) {
						const new_categories_form = new FormData()
						new_categories_form.append('name', new_category.name)
						client
							.post(`/categories`, new_categories_form)
							.then((response) => {
								message.success('Add success')
							})
					}
				}
				
			})
			}
		const form_data = new FormData()
		form_data.append('name', values.course_name)
		form_data.append('tutor', String(user_uuid))
		values.categories.map((category: any) =>
			form_data.append('categories', category.name)
		)
		form_data.append('cover_image', coverImage[0])
		client.post(`/course`, form_data).then((response) => {
			message.success('OK')
		})
		console.log(values)
		console.log(description)
	}
	return (
		<div className="col m-4">
			<div className="d-flex flex-row align-items-center">
				<li className="w-bold fs-2 py-4 px-4">
					<NavLink
						to={`/user/${user_uuid}/uploadedCourses/`}
						className="nav-link d-inline"
					>
						Uploaded Courses
					</NavLink>
				</li>
				<li className="w-bold fs-3 py-4 px-4">{course_id}</li>
			</div>
			<div>
				<Form onFinish={onFinish}>
					<FormInput
						label="Course Name"
						name="course_name"
						message="Please input name of your course"
					/>
					<DynamicSelect
						label="Category"
						name="categories"
						message="Please choose category"
						placeholder="Choose category"
						choices={categories}
					/>
					<br />
					<DynamicInput
						label="More"
						name="new_categories"
						message="Please input category"
						placeholder="Category"
					/>
					<Form.Item
						label="Price ($)"
						name="price"
						rules={[
							{
								required: true,
								message: 'Please input price',
							},
						]}
					>
						<InputNumber />
					</Form.Item>
					<Form.Item
						label="Cover Image"
						valuePropName="fileList"
						name="cover_image"
						rules={[
							{
								required: isUpload,
								message: 'Please input price',
							},
						]}
					>
						<UploadFile
							type="picture-card"
							setFiles={setCoverImage}
							setIsUpload={setIsUpload}
							button={
								<div>
									<PlusOutlined />
									<div style={{ marginTop: 8 }}>Upload</div>
								</div>
							}
						/>
					</Form.Item>
					<Form.Item label="Finish" valuePropName="checked">
						<Switch />
					</Form.Item>
					<Form.Item label="Description" name="description">
						{/* <TextEditor text={description} setText={setDescription}/> */}
						<TextArea />
					</Form.Item>
					<Form.Item
						label={<p style={{ fontWeight: 'bold' }}>Section</p>}
					></Form.Item>
					<DynamicAddSection />

					<Form.Item>
						<Button htmlType="submit">Button</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}
