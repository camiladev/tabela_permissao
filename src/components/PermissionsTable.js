import { useEffect, useState } from 'react';
import Checkbox from '../components/Checkbox';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export default function PermissionsTable(){
    const [checkedBox , setCheckeBox] = useState();
    const [isVisibleAnalise, setIsVisibleAnalise] = useState(true);
    const [isVisibleContas, setIsVisibleContas] = useState(true);
    

    useEffect(()=>{
        console.log('Mudou -> ', checkedBox)
    },[checkedBox])
   
    function handleChange(event){
        setCheckeBox({
            ...checkedBox,
            [event.target.name]: event.target.checked
            
        })
        
            if(event.target.checked === true){
                console.log('Marcado -> ',event.target.checked)
                marcarTodos(event)
            }else{
                console.log('Desmarcado -> ',event.target.checked)
                desmarcarTodos(event)
            }
        
    }

    function marcarTodos(event){
        const inputs = document.getElementsByTagName('input')
        var name = event.target.name;
        name = name.split('-')
        var id = event.target.id;
        id = id.split('-')

        if(name[0] === 'todos'){
            for(var i = 0; i< inputs.length; i++){
                console.log(inputs[i].name.indexOf(name[1]))
                if(inputs[i].type === 'checkbox' && 
                    inputs[i].name.indexOf(name[1])>=0){
    
                    inputs[i].checked = true
                }
            }

        }else{
            console.log('id', id[1])
            if(id[1] === 'todos'){

                for(var i = 0; i< inputs.length; i++){
                   
                    if(inputs[i].type === 'checkbox' && 
                        inputs[i].name.indexOf(name[1])>=0 && 
                        inputs[i].id === id[0]){
        
                        inputs[i].checked = true
                    }
                }
            }

       
        }
        

    }
    function desmarcarTodos(event){
        const inputs = document.getElementsByTagName('input')
        
        var name = event.target.name;
        name = name.split('-')
        var id = event.target.id;
        id = id.split('-')
        

        if(name[0] === 'todos'){
            for(var i = 0; i< inputs.length; i++){
                console.log(inputs[i].name.indexOf(name[1]))
                if(inputs[i].type === 'checkbox' && 
                    inputs[i].name.indexOf(name[1])>=0){
    
                    inputs[i].checked = false
                }
            }

        }else{
            
            if(id[1] === 'todos'){

                for(var i = 0; i< inputs.length; i++){
                   
                    if(inputs[i].type === 'checkbox' && 
                        inputs[i].name.indexOf(name[1])>=0 && 
                        inputs[i].id === id[0]){
        
                        inputs[i].checked = false
                    }
                }
            }

       
        }

    }

    function handleOnClick(event){
        console.log('Event Click -> ',event)
        if(event === 'analise'){
            if(isVisibleAnalise){
                setIsVisibleAnalise(false)
            }else{                
                setIsVisibleAnalise(true)
            }
        }

        if(event === 'contas'){
            if(isVisibleContas){
                setIsVisibleContas(false)
            }else{                
                setIsVisibleContas(true)
            }
        }
        
    }

    return(
        <table>
            <thead>
                <tr>
                    <th></th>
					<th>Ver listagem</th>
					<th>Ver Detalhes</th>
					<th>Criar</th>
					<th>Editar</th>
					<th>Deletar</th>
                  </tr>
            </thead>
            <tbody>
                <tr id='first-row'>{/* Todos */}
                    <td>Todos</td>
                    <td>
                        <Checkbox 
                            id={'todos'}
                            name={'todos-listagem'}
                            checked={checkedBox}
                            onChange={e => handleChange(e)}
                        />
                    </td>
                    <td>
                        <Checkbox 
                            id={'todos'}
                            name={'todos-detalhes'}
                            checked={checkedBox}
                            onChange={e => handleChange(e)}
                        />
                    </td>
                    <td>
                        <Checkbox 
                            id={'todos'}
                            name={'todos-criar'}
                            checked={checkedBox}
                            onChange={e => handleChange(e)}
                        />
                    </td>
                    <td>
                        <Checkbox 
                            id={'todos'}
                            name={'todos-editar'}
                            checked={checkedBox}
                            onChange={e => handleChange(e)}
                        />
                    </td>
                    <td>
                        <Checkbox 
                            id={'todos'}
                            name={'todos-deletar'}
                            checked={checkedBox}
                            onChange={e => handleChange(e)}
                        />
                    </td>
                </tr>
                <tr id='sub-row'>{/* Análise */}
                    <td>
                        <div onClick={e => handleOnClick('analise')} >
                            Análise
                            {isVisibleAnalise ? <IoIosArrowDown /> : <IoIosArrowForward/>}
                        </div>
                                           
                    </td>
                    <td>
                        <Checkbox 
                            id={'analise-todos'}
                            name={'analise-listagem'}
                            checked={checkedBox}
                            onChange={e => handleChange(e)}
                        />
                        
                    </td>
                    <td>
                        <Checkbox 
                            id={'analise-todos'}
                            name={'analise-detalhes'}
                            checked={checkedBox}
                            onChange={e => handleChange(e)}
                        />
                       
                    </td>
                    <td>
                        <Checkbox 
                            id={'analise-todos'}
                            name={'analise-criar'}
                            checked={checkedBox}
                            onChange={e => handleChange(e)}
                        />
                    </td>
                    <td>
                        <Checkbox 
                            id={'analise-todos'}
                            name={'analise-editar'}
                            checked={checkedBox}
                            onChange={e => handleChange(e)}
                        />
                    </td>
                    <td>
                        <Checkbox 
                            id={'analise-todos'}
                            name={'analise-deletar'}
                            checked={checkedBox}
                            onChange={e => handleChange(e)}
                        />
                    </td>
                    </tr>
                    { isVisibleAnalise && (

                    <tr>
                        <td>
                            <ul>
                                <li>Análise de contas</li>
                                <li>Análise de transações</li>
                                
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>
                                    <Checkbox 
                                        id={'analise'}
                                        name={'analiseContas-listagem'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                <li>
                                    <Checkbox 
                                        id={'analise'}
                                        name={'analiseTransacao-listagem'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                            </ul>
                        </td>
                        <td>
                        
                            <ul>
                                <li>
                                    <Checkbox 
                                        id={'analise'}
                                        name={'analiseContas-detalhes'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                <li>
                                    <Checkbox 
                                        id={'analise'}
                                        name={'analiseTransacao-detalhes'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                               
                            </ul>
                    </td>
                    <td>
                        
                            <ul>
                                <li>
                                    <Checkbox 
                                        id={'analise'}
                                        name={'analiseContas-criar'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                <li>
                                    <Checkbox 
                                        id={'analise'}
                                        name={'analiseTransacao-criar'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                
                            </ul>
                    </td>
                    <td>
                        
                            <ul>
                                <li>
                                    <Checkbox 
                                        id={'analise'}
                                        name={'analiseContas-editar'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                <li>
                                    <Checkbox 
                                        id={'analise'}
                                        name={'analiseTransacao-editar'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                
                            </ul>
                    </td>
                    <td>
                        
                            <ul>
                                <li>
                                    <Checkbox 
                                        id={'analise'}
                                        name={'analiseContas-deletar'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                <li>
                                    <Checkbox 
                                        id={'analise'}
                                        name={'analiseTransacao-deletar'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                               
                            </ul>
                    </td>
                    </tr>
                    )
                    }

                    <tr id='sub-row'>{/* Contas */}
                    <td>
                        
                        <div onClick={e => handleOnClick('contas')}>
                            Contas
                            {isVisibleContas ? <IoIosArrowDown /> : <IoIosArrowForward/>}

                        </div>
                       
                    
                    </td>
                    <td>
                        <Checkbox 
                            id={'contas-todos'}
                            name={'contas-listagem'}
                            checked={checkedBox}
                            onChange={e => handleChange(e)}
                        />
                        
                    </td>
                    <td>
                        <Checkbox 
                            id={'contas-todos'}
                            name={'contas-detalhes'}
                            checked={checkedBox}
                            onChange={e => handleChange(e)}
                        />
                       
                    </td>
                    <td>
                        <Checkbox 
                            id={'contas-todos'}
                            name={'contas-criar'}
                            checked={checkedBox}
                            onChange={e => handleChange(e)}
                        />
                    </td>
                    <td>
                        <Checkbox 
                            id={'contas-todos'}
                            name={'contas-editar'}
                            checked={checkedBox}
                            onChange={e => handleChange(e)}
                        />
                    </td>
                    <td>
                        <Checkbox 
                            id={'contas-todos'}
                            name={'contas-deletar'}
                            checked={checkedBox}
                            onChange={e => handleChange(e)}
                        />
                    </td>
                    </tr>
                    { isVisibleContas && (

                    <tr>
                        <td>
                            <ul>
                                <li>Cliente</li>
                                <li>Transações</li>
                                <li>Contas Digitais</li>
                                
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>
                                    <Checkbox 
                                        id={'contas'}
                                        name={'cliente-listagem'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                <li>
                                    <Checkbox 
                                        id={'contas'}
                                        name={'transacao-listagem'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                <li>
                                    <Checkbox 
                                        id={'contas'}
                                        name={'contasDigitais-listagem'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                            </ul>
                        </td>
                        <td>
                        
                            <ul>
                                <li>
                                    <Checkbox 
                                        id={'contas'}
                                        name={'cliente-detalhes'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                <li>
                                    <Checkbox 
                                        id={'contas'}
                                        name={'transacao-detalhes'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                <li>
                                    <Checkbox 
                                        id={'contas'}
                                        name={'contasDigitais-detalhes'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                               
                            </ul>
                    </td>
                    <td>
                        
                            <ul>
                                <li>
                                    <Checkbox 
                                        id={'contas'}
                                        name={'cliente-criar'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                <li>
                                    <Checkbox 
                                        id={'contas'}
                                        name={'transacao-criar'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                <li>
                                    <Checkbox 
                                        id={'contas'}
                                        name={'contasDigitais-criar'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                
                            </ul>
                    </td>
                    <td>
                        
                            <ul>
                                <li>
                                    <Checkbox 
                                        id={'contas'}
                                        name={'cliente-editar'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                <li>
                                    <Checkbox 
                                        id={'contas'}
                                        name={'transacao-editar'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                <li>
                                    <Checkbox 
                                        id={'contas'}
                                        name={'contasDigitais-editar'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                
                            </ul>
                    </td>
                    <td>
                        
                            <ul>
                                <li>
                                    <Checkbox 
                                        id={'contas'}
                                        name={'cliente-deletar'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                <li>
                                    <Checkbox 
                                        id={'contas'}
                                        name={'transacao-deletar'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                                <li>
                                    <Checkbox 
                                        id={'contas'}
                                        name={'contasDigitais-deletar'}
                                        checked={checkedBox}
                                        onChange={e => handleChange(e)}
                                    />
                                </li>
                               
                            </ul>
                    </td>
                    </tr>
                    )
                    }
                
            </tbody>
        </table>
    )
}