import React, {Component} from 'react'

export default class ZipINput extends Component {
  consrtuctor (props) {
    super(props)
    const v = (this.props.value)
          ? this.props.value : ''
    this.state = {
      value: v,
      isOK: this.checkValue(v)
    }
  }
  checkValue (s) {
    const zipPattern = /^\d{3}-\d{4}$/
    return zipPattern.test(s)
  }
  handleChange (e) {
    const v = e.target.value
    const newValue = v.replace(/[^0-9-]+/g, '')
    const newIsOK = this.checkValue(newValue)
    this.setState({
      value: newValue,
      isOK: newIsOK
    })
    if (this.props.onChange) {
      this.props.onChange({
        target: this,
        value: newValue,
        isOK: newIsOK
      }) 
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      value: nextProps.value,
      isOK: this.check
    }) 
  }
}
