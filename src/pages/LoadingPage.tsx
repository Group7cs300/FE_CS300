import ClipLoader from 'react-spinners/ClipLoader'

function LoadingPage() {
	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<ClipLoader
				color="#FF6783"
				size={50}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	)
}

export default LoadingPage
