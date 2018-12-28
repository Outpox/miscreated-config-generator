import * as React from 'react'
import * as ReactGA from 'react-ga'

import './app.css'
import logo from './assets/logo.svg'
import Parameter from './components/parameter'
import InfoBubble from './components/infoBubble'

import * as paramList from './assets/parameterList.json'
import { download, serializeForm } from './utils'

console.log(paramList)

ReactGA.initialize('UA-50661645-9')

class App extends React.Component {
  public render() {
    return (
      <div className='app'>
        <header className='app-header'>
          <InfoBubble />
          <img src={logo} className='app-logo' alt='logo' />
          <h1 className='app-title'>Miscreated Config Generator</h1>
          <p>A dedicated server config generator</p>
        </header>
        <form onSubmit={this.handleFormSubmit} className='parameter-list'>
          {getParamList()}
          <input type='submit' value='Download as "hosting.cfg"' />
        </form>
      </div>
    )
  }

  handleFormSubmit(event: any) {
    event.preventDefault()
    const config = serializeForm(event.target)
      .map(p => {
        switch (p.type) {
          case 'text':
            return `${p.name}="${p.value}"`
          default:
            return `${p.name}=${p.value}`
        }
      })
      .join('\n')

    download(config)
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
