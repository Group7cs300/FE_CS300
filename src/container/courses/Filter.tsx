import { useState } from 'react'
import { Container } from 'react-bootstrap'
import DropdownMenu from '../../components/courses/DropDown'
import SortBy from '../../components/courses/SortBy'

export default function Filter({
	date_filter,
	setDate_filter,
	price_filter,
	setPrice_filter,
	sort_direction,
	setSort_direction,
	currentSort,
	setCurrentSort
}: any) {
	const create_within_choices = [
		'All',
		'In this week',
		'In this month',
		'In this year',
	]
	const level_choices = ['All', 'Beginner', 'Medium', 'Advanced']
	
	return (
		<div className="col col-sm-3">
			<div className="fw-bold fs-2">Filters</div>
			<Container className="pt-2">
				<div className="fw-normal fs-5 text-muted">CREATE WITHIN</div>
				<DropdownMenu
					default_choice={date_filter}
					setChoice={setDate_filter}
					choices={create_within_choices}
				/>
			</Container>
			{/* ----------------------------- */}
			<Container className="pt-2">
				<div className="fw-normal fs-5 text-muted">LEVEL</div>
				<DropdownMenu
					default_choice={price_filter}
					setChoice={setPrice_filter}
					choices={level_choices}
				/>
			</Container>
			{/* ------------------------------ */}
			<div className="fw-bold fs-2 pt-3">Sort By</div>
			<SortBy
				sort_direction={sort_direction}
				setSort_direction={setSort_direction}
				currentSort={currentSort}
				setCurrentSort={setCurrentSort}
			/>
		</div>
	)
}
