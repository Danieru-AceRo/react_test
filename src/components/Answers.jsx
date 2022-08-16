import React from 'react'

function Answers(prop) {
    console.log(prop)
    
  return (
    <div>
        <input
          name={prop.prop}
          type={prop.prop2}
          // checked={this.state.isGoing}
          // onChange={this.handleInputChange}
        />
        <label>{prop.prop}</label>
    </div>
  )
}

export default Answers