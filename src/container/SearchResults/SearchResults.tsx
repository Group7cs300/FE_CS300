import React, { useState } from 'react'
import {
	ButtonGroup,
	Container,
	Dropdown,
	DropdownButton,
	SplitButton,
} from 'react-bootstrap'

export function DropdownMenu (props: any)
{
    const [choiceText, setchoiceText] = useState(props.default)
	const choiceAction =(event: any) => setchoiceText(event)
    return (
        <>
			<style type="text/css">
				{`
            .btn-flat {
            background-color: #FFFFFF;
            color: black;
            border: 1px solid #000000;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            }
            .btn-flat:hover {
                background-color: #F4F4F4;
                color: black;
                border: 1px solid #000000;
            }
    `}
    </style>
        <DropdownButton
						as={ButtonGroup}
						align={{ lg: 'start' }}
						title={choiceText}
						id="dropdown-menu-align-responsive-1"
						variant="flat"
                        onSelect={choiceAction}
					>
                        <Dropdown.Item eventKey="All" > All</Dropdown.Item>
						<Dropdown.Item eventKey="In this month" > In this month </Dropdown.Item>
						<Dropdown.Item eventKey="In this year"> In this year </Dropdown.Item>
					</DropdownButton>
                    </>
    )
}

export default function Filter() {
	return (	
			<Container style={{ paddingTop: 20 }}>
				<h1> Filters</h1>
                <DropdownMenu default="All"></DropdownMenu>
			</Container>
	)
}




export function CountResults(props: any) {
	return (
		<Container style={{ padding: 50, paddingBottom: 20 }}>
			<h2>{props.search_text}</h2>
			<h5 className="text-muted">{props.count} Results</h5>
		</Container>
	)
}
