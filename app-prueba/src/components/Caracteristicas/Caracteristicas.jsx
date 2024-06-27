import { createContext, useEffect, useState } from 'react'
import './Caracteristicas.css'

const CaracteristicasContext = createContext()

export const Caracteristicas = ()=>{

    const [ funciones , setFunciones] = useState([])

    const {VITE_CAR} = import.meta.env

    let pedirdatos = async () => {

        let controller = new AbortController

        let options = {
            method : 'get',
            signal : controller.signal,
        }
        await fetch( VITE_CAR , options)
        .then( res => res.json() )
        .then( data =>setFunciones(data) )
        .catch( err => console.log(err.message))
        .finally( ()=> controller.abort)
    }

    useEffect(()=>{

        pedirdatos()

    } , [])

    return(
        
        <CaracteristicasContext.Provider value={{}}>
        
        <div className="Caracteristicas-wrapper">
            <div className="Caracteristicas-grid">
            {funciones.length === 0 && <span>No hay datos</span>}
            {funciones.length !== 0 && funciones.map( funcion =>

                <Detalles key={funcion._id} {...funcion} />
                
            )}
            
            </div>
        </div>
        
        </CaracteristicasContext.Provider>
       
        
    )
}


const Detalles = (props) => {

    const {id , caracteristicas} = props

    return(
        <>
            {caracteristicas && caracteristicas.map(eachCaracteristica =>

                <Informacion key={eachCaracteristica.id} {...eachCaracteristica} />
            )}
                
        </>
    )
}

const Informacion = (props) => {

    const { id , imagen_ , color , detalles , alt_imagen_ } = props


    return(
        
        
            <div className={`Caracteristicas-container ${color}`}>
            <img src={imagen_} alt={alt_imagen_} className={`Caracteristicas-img ${id}`} />
            <span className={`Caracteristicas-span ${color}`}>{detalles}</span>
            </div>
            
        
    )
}