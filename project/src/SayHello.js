import React, { useState } from 'react';

export default function SayHello(props) {

  const [nameIndex, setNameIndex] = useState(0)

  const cycle = function () {
    let next = props.names.length > nameIndex + 1 ? nameIndex + 1 : 0

    setNameIndex(next)
  }

  return (
    <div>
      <h2>Hello, { props.names[nameIndex] }!</h2>
      <button onClick={cycle}>Cycle</button>
    </div>
  )
}
