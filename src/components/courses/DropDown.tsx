import { useState } from "react"
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap"

export default function DropdownMenu({ props,choices,default_choice}: any) {
	const [choiceText, setchoiceText] = useState(default_choice)
	const choiceAction = (event: any) => setchoiceText(event)
	return (
		<>
			<style type="text/css">
				{`
            .btn-flat {
			width:13em;
			height:3em;
            background-color: #FFFFFF;
            color: black;
            border: 1px solid #000000;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
			text-align:left;
            }
            .btn-flat:hover {
                background-color: #F4F4F4;
                color: black;
                border: 1px solid #000000;
            }
    `}
			</style>
			<div className="p-3">
			<DropdownButton
				align={{ lg: 'start' }}
				title={choiceText}
				id="dropdown-menu-align-responsive-1"
				variant="flat"
				onSelect={choiceAction}
			>
				{choices.map((choice: any, id: any) => (
					<div key={id}>
					{id != 0 &&<div className="dropdown-divider"></div>}
					<Dropdown.Item eventKey={choice}> {choice} </Dropdown.Item>
					</div>
				))}
			</DropdownButton>
			</div>
		</>
	)
}