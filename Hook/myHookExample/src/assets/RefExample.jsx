import React, { useRef } from 'react'

const RefExample = () => {
    let name = useRef(null);
  return (
    <>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>

            <input type="text" placeholder='Enter your name'  ref={name}/>
            <button onClick={() => alert(Hello ${name.current.value})}>Submit</button>
        </div>
    </>
  )
}

export default RefExample