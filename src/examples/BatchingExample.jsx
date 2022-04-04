import {useState} from 'react';


const BatchingExample = () => {
    const [state, setState] = useState(0);
    const [value, setValue] = useState(0);

    console.log('render');


    const update = () => {
        setTimeout(() =>{
            setValue(prev => prev + 1) // асинхронный рендер
            setState(prev => prev + 1)
        },200)
        
    }

    return (
        <div>
            <h1>value ={value}</h1>
            <h1>state ={state}</h1>
            <button onClick={update}>UPDATE</button>
        </div>
    );
};

export default BatchingExample;