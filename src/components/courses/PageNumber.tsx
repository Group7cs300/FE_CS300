import { useEffect } from 'react'
import { Pagination } from 'react-bootstrap'

export function PageNumber({ props, totalPage, page, setPage }: any) {
	useEffect(() => {
		console.log('Page', page, 'Total page', totalPage)
	}, [page, totalPage])

	return (
		<div>
			<Pagination className="justify-content-center">
				{page > 1 && <Pagination.First onClick={() => setPage(1)} />}
				{page > 1 && (
					<Pagination.Prev onClick={() => setPage(page - 1)} />
				)}
				{page > 2 && (
					<Pagination.Item onClick={() => setPage(page - 2)}>
						{' '}
						{page - 2}
					</Pagination.Item>
				)}
				{page > 1 && (
					<Pagination.Item onClick={() => setPage(page - 1)}>
						{page - 1}
					</Pagination.Item>
				)}
				<Pagination.Item active>{page}</Pagination.Item>
				{page < 3 && page < totalPage && (
					<Pagination.Item onClick={() => setPage(page + 1)}>
						{page + 1}
					</Pagination.Item>
				)}
				{page < 2 && page + 1 < totalPage && (
					<Pagination.Item onClick={() => setPage(page + 2)}>
						{page + 2}
					</Pagination.Item>
				)}
				{page < totalPage && (
					<Pagination.Next onClick={() => setPage(page + 1)} />
				)}
				{page < totalPage && (
					<Pagination.Last onClick={() => setPage(totalPage)} />
				)}
			</Pagination>
		</div>
	)
}
