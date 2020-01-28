import React from 'react'


const getJSON = async (uri) => {
    const result =await fetch(uri).then(res => res.json)
    return result
}

export class SimpleForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = { items: {} }
    }

    componentDidMount () {
        getJSON('')
    }

    render () {
        console.log(this.state)
        return <div>test</div>
    }
}

export default SimpleForm
