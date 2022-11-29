import { useEffect } from 'react'
import { Pagination } from 'react-bootstrap'

export function PageNumber({ props, totalPage, page, setPage }: any) {
	useEffect(() => {
		console.log('Page', page, 'Total page', totalPage)
	}, [page, totalPage])

	return (
		<div>
			<Pagination className="justify-content-center">
				<Pagination.First disabled={page==1} onClick={() => setPage(1)} />
				<Pagination.Prev disabled={page==1} onClick={() => setPage(page - 1)} />
				{page > 2 && page == totalPage && (
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
				{page < totalPage && (
					<Pagination.Item onClick={() => setPage(page + 1)}>
						{page + 1}
					</Pagination.Item>
				)}
				{page < 2 && page + 1 < totalPage &&(
					<Pagination.Item onClick={() => setPage(page + 2)}>
						{page + 2}
					</Pagination.Item>
				)}
					<Pagination.Next disabled={page==totalPage} onClick={() => setPage(page + 1)} />
					<Pagination.Last disabled={page==totalPage} onClick={() => setPage(totalPage)} />

			</Pagination>
		</div>
	)
}
