// import {useMemo, useState, useTransition} from 'react'
// import {data} from './data'

// const Concurrent = () => {
//     const [value, setValue] = useState('')
//     const [filterValue, setFilterValue] = useState('')
//     const [items , setItems] = useState(data)
//     const [isPending, startTrasition] = useTransition( )  // добавляет проресовку

//     const filteredItems = useMemo(() => {
//         return items.filter(item => item.tittle.toLowerCase().includes(filterValue))
//     }, [filterValue])

//     const onChangeValue = (e) => {
//         setValue(e.target.value);
//         startTrasition(() => {
//             setFilterValue(e.target.value)
//         })
//     }

//     return (
//         <>
//         <input type="text" value={value} onChange={onChangeValue} />
//         {isPending && <h1>Loading...</h1>}
//         <div>
//             {filteredItems.map(item => (
//                  <div key={item.id}>
//                  <div>id= {item.id}</div>
//                  <div>{item.tittle}</div>
//              </div>
//             ))}
           
//         </div>
//         </>
//     )
// }


import {useMemo, useState, useTransition,  useDeferredValue} from 'react'
import {data} from './data'

const Concurrent = () => {
    const [value, setValue] = useState('')
    const [filterValue, setFilterValue] = useState('')
    const [items , setItems] = useState(data)
    const defferedValue = useDeferredValue(value) //убирает лаги
    const filteredItems = useMemo(() => {
        return items.filter(item => item.tittle.toLowerCase().includes(filterValue))
    }, [ defferedValue])

    const onChangeValue = (e) => {
        setValue(e.target.value);
       
    }

    return (
        <>
        <input type="text" value={value} onChange={onChangeValue} />
        
        <div>
            {filteredItems.map(item => (
                 <div key={item.id}>
                 <div>id= {item.id}</div>
                 <div>{item.tittle}</div>
             </div>
            ))}
           
        </div>
        </>
    )
}


export default Concurrent;