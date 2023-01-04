import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import client from './client/axios'
import UploadedCoursesGrid from './containers/user/UploadedCourseGrid'
import APIS from './constants/api'
import LOCAL_STORAGE_KEYS from './constants/local_storage'
import { Account } from './constants/types'
import Profile from './pages/ProfilePage'
import {
	HomePage,
	NotFoundPage,
	SignInPage,
	SignUpPage,
	CoursesPage,
	LoadingPage,
	UserPage,
} from './pages'
import { useAppDispatch, useAppSelector } from './redux/store'
import { setToken, setAccount, removeToken } from './redux/user/slice'
import UploadedCoursesPage from './pages/UploadedCoursesPage'
import BoughtCoursesPage from './pages/BoughtCoursesPage'
import UploadCourse from './containers/user/UploadCourse'
import BoughtCoursesGrid from './containers/user/BoughtCoursesGrid'
import UpdateCourse from './containers/user/UpdateCourse'
import BoughtCourseDetail from './containers/user/BoughtCourseDetail'
import CourseDetailPage from './pages/CourseDetailPage'

function AuthenticatedApp() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/courses/:search_text" element={<CoursesPage />} />
			<Route path="/course/:course_id" element={<CourseDetailPage />} />
			<Route element={<UserPage />}>
				<Route path="/user/profile" element={<Profile />} />
				<Route element={<BoughtCoursesPage />}>
					<Route
						path="/user/boughtCourses/"
						element={<BoughtCoursesGrid />}
					/>
					<Route
						path="/user/boughtCourses/:course_id"
						element={<BoughtCourseDetail />}
					/>
				</Route>
				<Route element={<UploadedCoursesPage />}>
					<Route
						path="/user/uploadedCourses/"
						element={<UploadedCoursesGrid />}
					/>
					<Route
						path="/user/uploadedCourses/:course_id"
						element={<UpdateCourse />}
					/>
					<Route
						path="/user/uploadedCourses/add"
						element={<UploadCourse />}
					/>
				</Route>
			</Route>
			<Route path="*" element={<div style={{ flex: 1, padding:"50px" }}>404 Not found</div>} />
		</Routes>
	)
}

function UnAuthenticatedApp() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="signin" element={<SignInPage />} />
			<Route path="signup" element={<SignUpPage />} />
			<Route path="/courses/:search_text" element={<CoursesPage />} />
			<Route path="/course/:course_id" element={<CourseDetailPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	)
}

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
	return user.account ? <AuthenticatedApp /> : <UnAuthenticatedApp />
}

export default App
