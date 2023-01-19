import { useEffect, useState } from 'react';
import './App.css';

function App() {  
let [lista, setLista] = useState ([""])
let [novoItem, setNovoItem] = useState("")

return(
  <>
  <input value={novoItem} onChange={value => setNovoItem (value.target.value)} type="text"/>
  <button onClick={() =>adicionarNovoItem ()}>Adicionar</button>
<ul> 
  {lista.map((item, index) =>(
     <li>{item}
     <button onClick={() => deletarItem(index)}>Deletar</button>
     </li>
  ))}
</ul>
</>
)

function adicionarNovoItem (){
setLista([...lista , novoItem])
setNovoItem("")


function deletarItem (index){
  let temporario = [...lista]
temporario.splice(index , 1)
setLista(temporario)
 }
}


}


export default App;