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
	interface File {
		file: RcFile[]
		id : number
	}
	interface SectionFile {
		document: RcFile[]
		video : RcFile[]
	}
	const navigate = useNavigate()
	const account = useAppSelector((state) => state.user.account)
	const user_uuid = account?.uuid
	const { TextArea } = Input
	const [categories, setCategories] = useState<Category[]>([])
	const [coverImage, setCoverImage] = useState<File>()
	const [sectionsFile, setSectionsFile] = useState<SectionFile[]>([])

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
				form_data.append('custom_categories', new_category.name)
			})
		}
		if(coverImage != undefined)
			form_data.append('cover_image', coverImage.file[0])
		client
			.post(`/course`, form_data)
			.then((response) => {
				console.log(response.data.uuid)
				message.success('OK')
				return response.data.uuid
			})
			.then((data) => {
				if (values.sections != undefined) {
					values.sections.map((section: any, index: any) => {
						const section_form = new FormData()
						section_form.append('name', section.name)
						section_form.append('sectionNum', index + 1)
						if (section.summary != undefined)
							section_form.append('summary', section.summary)
						console.log(sectionsFile)
						console.log(sectionsFile[index].document.length)
						if (sectionsFile[index].document.length != 0)
							section_form.append('document', sectionsFile[index].document[0])
						if (sectionsFile[index].video.length != 0)
							section_form.append('video',  sectionsFile[index].video[0])
						section_form.append('course', data)
						client
							.post(`/sections`, section_form)
							.then((response) => {
								message.success('Add section success')
							})
					})
				}
				navigate(`/user/uploadedCourses/`)
			})
			.catch((response)=>{
				console.log(response)
			})
	}
	return (
		<div className="col m-4">
			<div className="d-flex flex-row align-items-center">
				<li className="w-bold fs-2 py-4 px-4">
					<NavLink
						to={`/user/uploadedCourses/`}
						className="nav-link d-inline"
					>
						Uploaded Courses
					</NavLink>
				</li>
				<li className="w-bold fs-3 py-4 px-4">Add</li>
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
						<InputNumber min={1} max={500}/>
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
							id = {1}
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
						setSectionsFile = {setSectionsFile}
						sectionsFile = {sectionsFile}
						initIndex={0}
					/>
					<Form.Item>
						<Button htmlType="submit">Button</Button>
					</Form.Item>
					
				</Form>
			</div>
		</div>
	)
}
