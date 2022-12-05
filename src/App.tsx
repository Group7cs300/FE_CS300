import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import client from './client/axios'
import APIS from './constants/api'
import LOCAL_STORAGE_KEYS from './constants/local_storage'
import { Account } from './constants/types'
import { HomePage, NotFoundPage, SignInPage, SignUpPage, CoursesPage, LoadingPage } from './pages'
import { useAppDispatch, useAppSelector } from './redux/store'
import { setToken, setAccount, removeToken } from './redux/user/slice'

function App() {
	const [loading, setLoading] = useState(false)
	const [fetching, setFetching] = useState(false)
	const dispatch = useAppDispatch()
	const user = useAppSelector((state) => state.user)
	const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN_KEY)

	useEffect(() => {
		if (user.account || !token) return
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 1000)
		setFetching(true)
		client
			.get<Account>(APIS.GET_ACCOUNT, {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then((response) => {
				dispatch(setToken(token))
				dispatch(setAccount(response.data))
				client.defaults.headers.common.Authorization = `Token ${token}`
			})
			.catch(() => {
				dispatch(removeToken())
			})
			.finally(() => {
				setFetching(false)
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user.token])

	if (loading || fetching) return <LoadingPage />
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path='signin' element={<SignInPage /> } />
			<Route path='signup' element={<SignUpPage /> } />
			<Route path="/courses/:search_text" element={<CoursesPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	)
}

export default App
