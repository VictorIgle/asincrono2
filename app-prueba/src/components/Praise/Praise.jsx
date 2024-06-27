import { useEffect, useState } from 'react'
import './Praise.css'

export const Praise = () =>{

    const [ bloque , setBloque ] = useState([])

    const {VITE_CAR} = import.meta.env

    let pedirdatos = async () => {

        let controller = new AbortController

        let options = {
            method : 'get',
            signal : controller.signal,
        }
        await fetch( VITE_CAR , options)
        .then( res => res.json() )
        .then( data =>setBloque(data) )
        .catch( err => console.log(err.message))
        .finally( ()=> controller.abort())
    }

    useEffect(()=>{

        pedirdatos()

    } , [])


    return(
        
        
        <div className="Praise-wrapper">
            <h2 className="Praise-h2">Praise for Triage 1</h2>
            <div className="Praise-grid">
                {bloque.length === 0 && <span>No hay datos</span>}
                {bloque.length !== 0 && bloque.map( bloque =>

                <Contenido key={bloque._id} {...bloque} />

            )}
            </div>
        </div>
        
    )
}

const Contenido = (props) => {

    const { praise } = props

    return(
        <>
        {praise && praise.map( eachPraise => 

            <Informacion key={eachPraise.id} {...eachPraise} />
        )}
        
        </>
    )
}

const Informacion = (props) => {

    const { texto , logo , alt_logo} = props


    return(
        
            <div className="Praise-container">
                <p className="Praise-p">{texto}</p>
                <img src={logo} alt={alt_logo} loading='lazy' className="Praise-img" />
            </div>

        
    )
}