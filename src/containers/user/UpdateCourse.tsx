import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Form, Input, Button, InputNumber, Switch, message, Space } from 'antd'
import client from '../../client/axios'
import { RcFile } from 'antd/es/upload'
import { useAppSelector } from '../../redux/store'
import { ClipLoader } from 'react-spinners'
import axios from 'axios'
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons'
import DynamicAddSection from '../../components/uploaded_courses/DynamicAddSection'
import Categories from '../../components/uploaded_courses/Categories'
export default function UploadCourse() {
	interface Category {
		uuid: String
		name: String
	}
	interface File {
		file: RcFile[]
		id: number
	}
	interface Section {
		uuid: string
		name: string
		sectionNum: number
		document: string
		document_name: string
		video_name: string
		video: string
		summary: string
	}
	interface Course {
		uuid: string
		name: string
		categories: any[]
		cover_image: string
		price: number
		is_finished: boolean
		description: string
	}
	interface SectionFile {
		document: RcFile[]
		video: RcFile[]
	}
	const [course, setCourse] = useState<Course>()
	const navigate = useNavigate()
	const account = useAppSelector((state) => state.user.account)
	const user_uuid = account?.uuid
	const { course_id } = useParams()
	const { TextArea } = Input
	const [categories, setCategories] = useState<Category[]>([])
	const [old_sections, setOldSections] = useState<Section[]>([])
	const [countSections, setCountSection] = useState(0)
	const [sectionsFile, setSectionsFile] = useState<SectionFile[]>([])
	// const [description, setDescription] = useState('')
	const [loading, setLoading] = useState(false)
	const [fetching, setFetching] = useState(false)
	useEffect(() => {
		async function fetchCategory() {
			setLoading(true)
			setTimeout(() => {
				setLoading(false)
			}, 500)
			setFetching(true)
			client
				.get<Category[]>(`/categories`)
				.then((response) => {
					setCategories(response.data)
				})
				.catch((error) => {
					message.error(error)
				})
				.then(() => {
					client
						.get<Course>(`/course/${course_id}`)
						.then((respone) => {
							setCourse(respone.data)
						})
						.then(() => {
							client
								.get<Section[]>(
									`/sections?course=${course_id}&ordering=sectionNum`
								)
								.then((response) => {
									setOldSections(response.data)
									setCountSection(response.data.length)
								})
								.then(() => {
									setFetching(false)
								})
						})
				})
		}
		fetchCategory()
	}, [])
	const downloadFile = (index: any) => {
		axios({
			url: old_sections[index].document,
			method: 'GET',
			responseType: 'blob',
		}).then((response) => {
			const url = window.URL.createObjectURL(new Blob([response.data]))
			const link = document.createElement('a')
			link.href = url
			link.setAttribute('download', old_sections[index].document_name)
			document.body.appendChild(link)
			link.click()
		})
	}
	const onFinish = (values: any) => {
		const sections_uuid = values.old_sections.map(
			(section: any) => section.uuid
		)
		for (let i = 0; i < old_sections.length; ++i) {
			if (!sections_uuid.includes(old_sections[i].uuid)) {
				client.delete(`/sections/${old_sections[i].uuid}`).then(() => {
					message.success('Delete success')
				})
			}
		}
		values.old_sections.map((section: any, index: any) => {
			const section_form = new FormData()
			section_form.append('name', section.name)
			section_form.append('sectionNum', index + 1)
			if (section.summary != undefined)
				section_form.append('summary', section.summary)
			section_form.append('course', String(course_id))
			client
				.put(`/sections/${section.uuid}`, section_form)
				.then((response) => {
					message.success(`Update section ${index + 1} success`)
				})
		})
		if (values.sections != undefined) {
			values.sections.map((section: any, index: any) => {
				const section_form = new FormData()
				section_form.append('name', section.name)
				section_form.append('sectionNum', index + countSections + 1)
				if (section.summary != undefined)
					section_form.append('summary', section.summary)

				if (sectionsFile[index].document.length != 0)
					section_form.append(
						'document',
						sectionsFile[index].document[0]
					)
				if (sectionsFile[index].video.length != 0)
					section_form.append('video', sectionsFile[index].video[0])
				section_form.append('course', String(course_id))
				client.post(`/sections`, section_form).then((response) => {
					message.success('Add section success')
				})
			})
		}
	}
	if (loading || fetching)
		return (
			<div className="d-flex mx-auto align-items-center">
				<ClipLoader
					color="#FF6783"
					size={50}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			</div>
		)
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
				<li className="w-bold fs-3 py-4 px-4">{course?.name}</li>
			</div>

			<div>
				<Form
					onFinish={onFinish}
					initialValues={{
						course_name: course?.name,
						price: course?.price,
						description: course?.description,
					}}
				>
					<Form.Item
						label="Course Name"
						name="course_name"
						rules={[
							{
								required: true,
								message: "Please input course's name",
							},
						]}
					>
						<Input placeholder="Enter name of course" />
					</Form.Item>
					<Form.Item label="Category">
						<Categories categories={course?.categories} />
					</Form.Item>
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
						<InputNumber min={1} max={500} />
					</Form.Item>
					<Form.Item label="Cover Image">
						<div>
							<img src={course?.cover_image} alt="cover_image" />
						</div>
					</Form.Item>
					<Form.Item
						label="Finish"
						valuePropName="checked"
						name="is_finished"
					>
						<Switch defaultChecked={course?.is_finished} />
					</Form.Item>
					<Form.Item label="Description" name="description">
						<TextArea placeholder="Enter description" />
					</Form.Item>
					<Form.Item
						label={<p style={{ fontWeight: 'bold' }}>Section</p>}
					></Form.Item>

					<Form.List name="old_sections" initialValue={old_sections}>
						{(fields, { remove }) => (
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
												label={`Section ${index + 1}`}
												rules={[
													{
														required: true,
														message:
															'Please input name of section',
													},
												]}
											>
												<Input placeholder="Name" />
											</Form.Item>
											<Form.Item
												label="Summary"
												name={[field.name, 'summary']}
											>
												<TextArea
													placeholder="Text here"
													rows={2}
												/>
											</Form.Item>
											<Form.Item label="Video">
												<video
													id="myVideo"
													controls
													width="400"
													height="300"
												>
													<source
														id="mp4_src"
														src={
															old_sections[index]
																.video
														}
														type="video/mp4"
													/>
												</video>
											</Form.Item>
											<Form.Item label="Document">
												<a
													onClick={() =>
														downloadFile(index)
													}
													style={{ color: 'blue' }}
												>
													{
														old_sections[index]
															.document_name
													}
												</a>
											</Form.Item>
											<MinusCircleOutlined
												style={{
													height: 40,
													color: 'red',
												}}
												onClick={() => {
													remove(field.name)
													setCountSection(
														countSections - 1
													)
												}}
											/>
										</Space>
									)
								})}
							</>
						)}
					</Form.List>
					<DynamicAddSection
						setSectionsFile={setSectionsFile}
						sectionsFile={sectionsFile}
						initIndex={countSections}
					/>
					<Form.Item></Form.Item>

					<Form.Item>
						<Button htmlType="submit">Button</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}
