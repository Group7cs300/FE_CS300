import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Form, Input, Button, InputNumber, Switch, message } from 'antd'
import client from '../../client/axios'
import FormInput from '../../components/uploaded_courses/FormInput'
import UploadFile from '../../components/uploaded_courses/UploadFile'
import DynamicAddSection from '../../components/uploaded_courses/DynamicAddSection'
import { RcFile } from 'antd/es/upload'
import DynamicSelectCategory from '../../components/uploaded_courses/DynamicSelectCategory'
import DynamicNewCategory from '../../components/uploaded_courses/DynamicNewCategory'
import { useAppSelector } from '../../redux/store'

export default function UploadCourse() {
	interface Category {
		uuid: String
		name: String
	}
	const navigate = useNavigate()
	const account = useAppSelector((state) => state.user.account)
	const user_uuid = account?.uuid
	const { course_id } = useParams()
	const { TextArea } = Input
	const [categories, setCategories] = useState<Category[]>([])
	const [coverImage, setCoverImage] = useState<RcFile[]>([])
	const [documents, setDocuments] = useState<RcFile[]>([])
	const [videos, setVideos] = useState<RcFile[]>([])
	const addDocument = (document: RcFile[]) => {
		let temp = documents
		temp.push(document[0])
		setDocuments(temp)
	}
	const addVideo = (video: RcFile[]) => {
		let temp = videos
		temp.push(video[0])
		setVideos(temp)
	}
	// const [description, setDescription] = useState('')
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
	}, [])
	const [isUpload, setIsUpload] = useState(true)
	const [isHaveCategory, setIsHaveCategory] = useState(true)
	const onFinish = (values: any) => {
		const form_data = new FormData()
		form_data.append('name', values.course_name)
		form_data.append('tutor', String(user_uuid))
		{
			values.description != undefined &&
				form_data.append('description', values.description)
		}
		values.categories.map((category: any) => {
			if (category.name != undefined) {
				form_data.append('categories', category.name)
			}
		})
		if (values.new_categories != undefined) {
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
								form_data.append(
									'categories',
									response.data.uuid
								)
								message.success('Add success')
							})
					}
				}
			})
		}
		form_data.append('cover_image', coverImage[0])
		console.log(coverImage[0])
		setTimeout(() => {
			client
				.post(`/course`, form_data)
				.then((response) => {
					console.log(response.data.uuid)
					message.success('OK')
					return response.data.uuid
				})
				.then((data) => {
					if (values.sections != undefined) {
						values.sections.map((section: any,index:any) => {
							const section_form = new FormData()
							section_form.append('name', section.name)
							section_form.append('sectionNum', index + 1)
							if (section.summary != undefined)
								section_form.append('summary', section.summary)
							section_form.append('document', documents[index])
							section_form.append('video', videos[index])
							section_form.append('course',data)
							client
								.post(`/sections`, section_form)
								.then((response) => {
									message.success('Add section success')
								})
						})
					}
				})
		}, 1000)
		setTimeout(() => {
		navigate(`/user/${user_uuid}/uploadedCourses/`)},1500)
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
						placeholder="Enter name of course"
					/>
					<DynamicSelectCategory
						label="Category"
						name="categories"
						message="Please choose category"
						placeholder="Choose category"
						choices={categories}
						isRequire={isHaveCategory}
					/>
					<br />
					<DynamicNewCategory
						label="More"
						name="new_categories"
						message="Please input category"
						placeholder="Category"
						setIsHaveCategory={setIsHaveCategory}
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
								message: 'Please input cover image',
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
						<TextArea placeholder="Enter description" />
					</Form.Item>
					<Form.Item
						label={<p style={{ fontWeight: 'bold' }}>Section</p>}
					></Form.Item>
					<DynamicAddSection
						addDocument={addDocument}
						addVideo={addVideo}
					/>

					<Form.Item>
						<Button htmlType="submit">Button</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}
