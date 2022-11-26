import React, { useState } from 'react'
import {Container} from 'react-bootstrap'
import DropdownMenu from '../../components/DropDown/DropDown'
import SortBy from '../../components/SortBy/SortBy'



export default function Filter() {
	const create_within_choices = [
		'All',
		'In this week',
		'In this month',
		'In this year',
	]
	const level_choices = ['All', 'Beginner', 'Medium', 'Advanced']
    const list_sortBy = [
		'RATE',
		'POPULAR',
		'PRICE',
	]
	return (
		<div className='col col-sm-3'>
			<div className="fw-bold fs-2">Filters</div>
			<Container className="pt-2">
				<div className="fw-normal fs-5 text-muted">CREATE WITHIN</div>
				<DropdownMenu default_choice={create_within_choices[0]} choices={create_within_choices}/>
			</Container>
            {/* ----------------------------- */}
			<Container className="pt-2">
				<div className="fw-normal fs-5 text-muted">LEVEL</div>
				<DropdownMenu default_choice={level_choices[0]} choices={level_choices}/>
			</Container>
            {/* ------------------------------ */}
			<div className="fw-bold fs-2 pt-3">Sort By</div>
			<SortBy listElements={list_sortBy}/>
		</div>
	)
}
export function CountResults(props: any): JSX.Element {
	return (
		<Container style={{ padding: 50, paddingBottom: 20 }}>
			<h2>{props.search_text}</h2>
			<h5 className="text-muted">{props.count} Results</h5>
		</Container>
	)
}
