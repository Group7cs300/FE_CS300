import { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'
import DropdownMenu from '../courses/DropDown'
import CheckBox from './CheckBox'

export default function SortBy({currentSort,setCurrentSort,sort_direction, setSort_direction}: any) {
    const sort_choices = [
		'Max to Min',
		'Min to Max',
	]
	console.log(currentSort)
	function Checked(id: Number){
		
		if(id == currentSort)
			return true
		return false
	}
	return (
		<Container className="pt-2">
				<CheckBox lable_name='RATE' checked={Checked(1)} id='1' setChecked={setCurrentSort}></CheckBox>
				<CheckBox lable_name='POPULAR' checked={Checked(2)} id='2' setChecked={setCurrentSort}></CheckBox>
				<CheckBox lable_name='PRICE' checked={Checked(3)} id='3' setChecked={setCurrentSort}></CheckBox>
            <div>
                <DropdownMenu default_choice={sort_direction} setChoice={setSort_direction} choices={sort_choices}/>
            </div>
		</Container>
	)
}
