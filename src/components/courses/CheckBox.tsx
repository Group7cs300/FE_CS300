interface CheckBoxProps {
    lable_name:string,
    id:string,
    checked:boolean,
    setChecked:any
}

export default function CheckBox({lable_name, id, checked, setChecked}:CheckBoxProps){


    function setStateCheck(){
        console.log(checked)
        if(checked==true)
            setChecked(0)
        setChecked(Number(id))
    }
    return(
        <div className='form-check'>
        <input type="checkbox" className='form-check-input' onClick={setStateCheck} checked={checked}/>
        <label className="form-check-label">{lable_name}</label>
        </div>
    )
}
   