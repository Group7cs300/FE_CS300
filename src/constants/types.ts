export interface Account {
	uuid:string
	username: string
	first_name:string
	last_name:string
	email:string
	total_uploaded_course:string
	date_joined:string
}

export interface User {
	token: string | undefined
	account: Account | undefined
}

export interface SigninCredentails {
	username: string
	password: string
	remember: boolean
}

export interface Pagination<T> {
	count: number,
	results: T[]
}