
export default function Button(){

    function handleButton(){
        const inputs = document.getElementsByTagName('input')
        const check = []
        for(var c = 0; c< inputs.length; c++){
          if(inputs[c].type === 'checkbox'){
              if(inputs[c].checked === true){
                  check.push(inputs[c].name)
              }
          }
    
        }
        console.log(check)
    
      }
    return(
        <button  
            type='button' 
            onClick={handleButton}>CADASTRAR
        </button>

    )
}