import { Container, Form } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'
import DropdownMenu from './DropDown'

export default function SortBy(props: any) {
	const typeSort = props.listElements
    const sort_choices = [
		'Min to Max',
		'Max to Min',
	]
	return (
		<Container className="pt-2">
			{typeSort.map((elememt: any, id: any) => {
				return (
					<Form key={id}>
						<div
							key={`default-checkbox`}
							className="form-check p-0 mb-3"
						>
							<Form.Check
								type="checkbox"
								id="checkbox-2"
								label={elememt}
							/>
						</div>
					</Form>
				)
			})}
            <div>
                <DropdownMenu default_choice={sort_choices[0]} choices={sort_choices}/>
            </div>
		</Container>
	)
}
