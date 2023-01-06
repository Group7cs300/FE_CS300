import { Form, message, Upload } from 'antd'
import {
	PlusOutlined,
	MinusCircleOutlined,
	DollarOutlined,
	UploadOutlined,
} from '@ant-design/icons'
import { RcFile, UploadProps } from 'antd/es/upload'
import { useState } from 'react'
export default function UploadFile({
	button,
	type,
	setFiles,
	setIsUpload,
	id,
	accept
}: any) {
	interface File {
		file: RcFile[]
		id: number
	}
	const blank: RcFile[] = []
	const [upload, setUpload] = useState(true)
	const props: UploadProps = {
		listType: type,
		accept:accept,
		onChange(info) {
			const { status } = info.file
			if (status !== 'uploading') {
			}
			if (status === 'done') {
				message.success(`${info.file.name} file uploaded successfully.`)
			} else if (status === 'error') {
				message.error(`${info.file.name} file upload failed.`)
			}
		},

		beforeUpload(file, FileList) {
			const isPNG = file.type === 'image/png';
    		if (!isPNG) {
      		message.error(`${file.name} is not a png file`);
    			}
			else{
			setIsUpload(!upload)
			setUpload(!upload)
			setFiles({
				file: FileList,
				id: id - 1,
			})}

			return false
		},
		onRemove() {
			setFiles({
				file: blank,
				id: id - 1,
			})
			setUpload(!upload)
			setIsUpload(!upload)
		},
	}
	return <Upload {...props}>{upload && button}</Upload>
}
