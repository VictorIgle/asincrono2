import { useEffect, useState } from 'react'
import './Footer.css'

export const Footer = () => {

    const [ foot , setFoot ] = useState([])

    const {VITE_CAR} = import.meta.env

    let pedirdatos = async () => {

        let controller = new AbortController

        let options = {
            method : 'get',
            signal : controller.signal
        }
        await fetch( VITE_CAR , options)
        .then( res => res.json() )
        .then( data => setFoot(data) )
        .catch( err => console.log(err.message) )
        .finally( ()=> controller.abort() )
    }

    useEffect(()=> {

        pedirdatos()

    }, [])


    return(
        <div className="Footer">
            {foot.length === 0 && <span>No hay datos</span>}
            {foot.length != 0 && foot.map(eachFoot =>
                <Contenidos key={ eachFoot._id} {...eachFoot} />
            )}
        </div>
    )
}

const Contenidos = (props) => {

    const { footer} = props

    return(
        <>
            {footer && footer.map(eachFooter =>
                <Datosfooter key={eachFooter.id} {...eachFooter} />
             )}
        </>
    )
}

const Datosfooter = (props) => {

    const { titulo_ } = props

    

    return(
        <>
            <span className="Footer-span">{titulo_}</span>
        </>
    )
}

