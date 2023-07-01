import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increaseByTwoCounter } from "../redux/actions/counterActions"
import { Button } from 'reactstrap'

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <Button onClick={e=>{
          this.props.dispatch(increaseByTwoCounter());
        }}>2 Arttir</Button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
return {action: bindActionCreators(increaseByTwoCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter)