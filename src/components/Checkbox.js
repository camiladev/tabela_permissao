

export default function Checkbox(props){
  //console.log('Props -> ',props.name)

  function handleChange(event){
      props.onChange(event)
      console.log('event ', event.target.name)
  }

  return(
    <input type="checkbox"  
            id={props.id}
           name={props.name}
           checked={props.isChecked}
           onChange={handleChange}
    />
  )
}