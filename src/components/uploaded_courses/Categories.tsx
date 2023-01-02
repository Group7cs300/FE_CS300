export default function Categories({ props, categories }: any) {
	return (
		<div>
			{categories != undefined && (
				<div>
					{categories.map((category: any) => (
						<div
							key={category.uuid}
							className="mx-2 px-2 border d-inline-flex"
							style={{
								fontWeight: 'bolder',
								borderRadius: 5,
							}}
						>
							{category.name}
						</div>
					))}
				</div>
			)}
		</div>
	)
}
