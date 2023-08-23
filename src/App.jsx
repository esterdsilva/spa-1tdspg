import Cabecalho from './components/Cabecalho'
import Conteudo from './components/Conteudo'
import Rodape from './components/Rodape'

export default function App() {

  //ÁREA DECLARATIVA
  let meuNome = "Ester";



  return (
    <>
      <div className="container">

        <Cabecalho nomeDoUsuario={meuNome}/>
        <Conteudo/>
        <Rodape/>

      </div>
    </>
  )

}

//NÃO PRECISA TER A DIV - CRIAR UM FRAGMENT INICIAL