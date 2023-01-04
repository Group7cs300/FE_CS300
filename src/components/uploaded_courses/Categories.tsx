export default function Categories({ props, categories }: any) {
	return (
		<div>
			{categories != undefined && (
				<div className="px-3">
					{categories.map((category: any) => (
						<div
							key={category.uuid}
							className="mx-2 px-4 border d-inline-flex"
							style={{
								fontWeight: 'bolder',
								borderRadius: 10,
								backgroundColor:"#002333",
								color:"#FFF",		
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
