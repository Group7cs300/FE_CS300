import { Form, message, Upload } from "antd";
import {
	PlusOutlined,
	MinusCircleOutlined,
	DollarOutlined,
	UploadOutlined,
} from '@ant-design/icons'
import { RcFile, UploadProps } from "antd/es/upload";
import { useState } from "react";
export default function UploadFile({button,type,setFiles,setIsUpload}:any){
    const [upload,setUpload] = useState(true)
    const beforeUpload = (file: RcFile)=>{
        setFiles(file)
        setUpload(!upload)
        setIsUpload(!upload)
        return false
    }
    const onRemove = ()=>{
        setUpload(!upload)
        setIsUpload(!upload)
    }
    const props: UploadProps = {
        listType: type,
        onChange(info) {
            const { status } = info.file
            if (status !== 'uploading') {
                console.log(info.file, info.fileList)
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`)
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`)
            }
        },
        beforeUpload(file, FileList) {
            setFiles(FileList)
            setUpload(!upload)
            setIsUpload(!upload)
            return false
        },
        onRemove(){
            setUpload(!upload)
            setIsUpload(!upload)
        }
    }
    return(
       
						<Upload
							{...props}
						>
                            
                          {upload && button}
						</Upload>
                        
		
    )
}