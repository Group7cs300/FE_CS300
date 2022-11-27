import { Container, Form } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'
import DropdownMenu from '../courses/DropDown'

export default function SortBy({listElements, sort_direction, setSort_direction}: any) {
    const sort_choices = [
		'Max to Min',
		'Min to Max',
	]
	function setType(){
		console.log("hi")
	}
	return (
		<Container className="pt-2">
			{listElements.map((elememt: any, id: any) => {
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
								onClick={setType}
							/>
						</div>
					</Form>
				)
			})}
            <div>
                <DropdownMenu default_choice={sort_direction} setChoice={setSort_direction} choices={sort_choices}/>
            </div>
		</Container>
	)
}
