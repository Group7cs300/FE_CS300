export interface Account {
	username: string
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