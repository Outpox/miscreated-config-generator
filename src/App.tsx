import * as React from 'react'
import './app.css'
import logo from './assets/logo.svg'
import Parameter from './components/parameter'

import * as paramList from './assets/parameterList.json'

console.log(paramList)

import { download, serializeForm } from './utils'

class App extends React.Component {
  public render() {
    return (
      <div className='app'>
        <header className='app-header'>
          <img src={logo} className='app-logo' alt='logo' />
          <h1 className='app-title'>Miscreated Config Generator</h1>
          <p>A dedicated server config generator</p>
        </header>
        <form onSubmit={this.handleFormSubmit} className='parameter-list'>
          {getParamList()}
          <input type="submit" value="submit"/>
        </form>
        <div>
          <button onClick={this.handleClick}>download</button>
        </div>
      </div>
    )
  }

  handleClick() {
    download(`lalalal
    dawodhohef
    dpefoucdepwsgf\erdfhviuedrggfer\n\n\n\ndwaodu
    wao`)
  }

  handleFormSubmit(event: any) {
    event.preventDefault()
    console.log(event.target)
    console.log(serializeForm(event.target))
  }
}

function getParamList(): JSX.Element[] {
  return paramList.map((param, i) => {
    return (
      <Parameter
        key={i}
        name={param.name}
        inputType={param.type}
        description={param.description}
        options={param.options}
      />
    )
  })
}

export default App
