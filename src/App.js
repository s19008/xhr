import React from 'react'

class App extends React.Component {
    constructor (props) {
      super(props)
    
      this.state = {
        name: 'クジラ',
        age: 22,
      
        hobby: '読書'
      }
    }

    doChange (e) {
      const userValue = e.target.value
      const key = e.target.name
      this.setState({[key]: userValue})
    }

    doSubmit (e) {
      e.preventDefault()
      const j = JSON.stringify(this.state)
      window.alert(j)
    }
    render () {
      const doSubmit = (e) => this.doSubmit(e)
      const doChange = (e) => this.doChange(e)
      return (
        <form onSubmit={doSubmit}>
            <div><label>
                名前: <br />
                <input name='name'
                    type='text'
                    )}
}



export default App
