import { createContext, useEffect, useState } from 'react'
import './Main.css'

const MainContext = createContext()

export const Main = ()=>{

const [ bloques , setBloques] = useState([])

const {VITE_CAR} = import.meta.env

let pedirDatos = async ()=>{

    let controller = new AbortController()
    let options = {
        method : 'get',
        signal : controller.signal
    }

    await fetch( VITE_CAR , options)
    .then( res => res.json() )
    .then( data =>setBloques(data) )
    .catch( err => console.log(err.message))
    .finally( ()=> controller.abort())
}

useEffect(()=>{

    pedirDatos()
    
} , [])



    return(
        

        <MainContext.Provider value={{}}>
        <main className="Section">
            {bloques.length == 0 && <p>No hay informacion</p>}
            {bloques.length !== 0 && bloques.map( bloque =>

                <Informacion key={bloque.id} {...bloque} />

             )}
           
        </main>
        </MainContext.Provider>
        
        
    )
}

const Informacion = (props)=>{


    const { alt_imagen , nombre , titulo , descripcion , imagen , icono , alt_svg, svg_ } = props



    return(
       
            
             <div className={`Section-container ${nombre}`}>
               <div className={`Section-wrapper ${nombre}`}>
                    <img src={icono} alt={alt_svg} className={`Section-icon ${nombre}`} />
                    <h2 className={`Section-title ${nombre}`}>{titulo}</h2>
                    <p className={`Section-p ${nombre}`}>{descripcion}</p>
                    <img src={svg_} alt="Aple-logo" loading='lazy' className={`Section-apple ${nombre}`} />
               </div>

                <div className={`Section-image ${nombre}`}>
                 <img src={imagen} alt={alt_imagen} loading='lazy' className="Section-img" />
                </div>
                
            </div>
            
        
    )
}