import React from 'react'
import './App.css'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      contagem: 0
    };
  }

//Para atualizar o estado quando for realizado
MaisUm = (state) => {
  this.setState({ contagem: state + 1 });
}

// é chamado após a renderização do componente é montado
componentDiMount() {
  console.log("componente montado")
}

// é executado quando o componente é desmontado
componentwillUnmount() {
  console.log("componente Desmontado")
}

// o render é executado quando o componente é atualizado, ele renderiza
render () {
  return (
    <main>
      <p>{this.state.contagem}</p>
      <button onClick={() => this.MaisUm(this.state.contagem)}>+1</button>
    </main>
  )
}

// é executado apos a atualização do componente
componentDiUpdate() {
  console.log("Componente atualizado")
 }
}