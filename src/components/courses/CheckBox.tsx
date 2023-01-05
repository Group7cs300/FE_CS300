interface CheckBoxProps {
	lable_name: string
	id: string
	check: boolean
	setChecked: any
}

export default function CheckBox({
	lable_name,
	id,
	check,
	setChecked,
}: CheckBoxProps) {
	function setStateCheck() {
		if (check == true) setChecked(0)
		setChecked(Number(id))
	}
	return (
		<div className="form-check">
			<input
				type="checkbox"
				className="form-check-input"
				onChange={setStateCheck}
				checked={check}
			/>
			<label className="form-check-label">{lable_name}</label>
		</div>
	)
}
