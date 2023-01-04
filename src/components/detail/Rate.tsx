import React from 'react'
import { Rate } from 'antd'

export default function Star({ props, star }: any) {
	return <Rate allowHalf disabled count={5} defaultValue={star} />
}
