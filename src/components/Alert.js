import React from 'react'

export default function Alert(props) {

       

    return (
       <>
      <div style={{height:'100px'}}>
     <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert" >
       <strong>{props.alert.type}</strong> {props.alert.msg}
       </div>
  
</div>
  

       </>
    )
}
