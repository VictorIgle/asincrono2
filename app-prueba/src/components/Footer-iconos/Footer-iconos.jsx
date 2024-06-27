import { useEffect, useState } from 'react'
import './Footer-iconos.css'

export const FooterIconos = () => {

    const [ iconos , setIconos ] = useState([])

    const {VITE_CAR} = import.meta.env

    let pedirdatos = async () => {

        let controller = new AbortController

        let options = {
            method : 'get',
            signal : controller.signal
        }
        await fetch( VITE_CAR , options)
        .then( res => res.json() )
        .then( data => setIconos(data) )
        .catch( err => console.log(err.message) )
        .finally( ()=> controller.abort() )
    }

    useEffect(()=> {

        pedirdatos()

    }, [])


    return(
        <div className="Footer-images">
            {iconos.length === 0 && <span>No hay datos</span>}
            {iconos.length != 0 && iconos.map( icono => 
                <BaseDD key={ icono._id} {...icono} />
            )}
        </div>
    )
}

const BaseDD = (props) => {

    const {bbdd} = props


    return(

        <>
        {bbdd && bbdd.map( eachBbdd=> 
            <Icono key={eachBbdd._id} {...eachBbdd} />
        )}
        </>
    )
}

const Icono = (props) => {

    const { footer_icono } = props

    return(
        <>
            {footer_icono && footer_icono.map( eachIcono =>
            <Imagen key={ eachIcono._id} {...eachIcono} />
            )}
        </>
    )
}

const Imagen = (props) => {

    const {svg , alt_icono} = props

    return(
        <img src={svg} alt={alt_icono} className="Footer-img" />
    )
}