import React, { useState, useEffect } from 'react'
// short-circuit evaluation
// ternary operators

const ShortCircuit = () => {

    const [text, setText] = useState('');
    const [isError, setError] = useState(false);
    // const firstValue = text || 'hello world';
    // const secondValue = text && 'hello World!';


  return (
    <div>
        <h1>{text || 'john Doe'}</h1>
        <button className='btn' onClick={() => setError(!isError)}>
            toggle error
        </button>
        {isError && <h1>Error...</h1>}
        {isError ? (
            <p>
                there is error...
            </p>
        ) : (
            <div>
                <p>there is no error...</p>
            </div>
        )}
    </div>
  )
}

export default ShortCircuit;