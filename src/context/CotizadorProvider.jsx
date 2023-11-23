import { createContext } from "react"
import { useState } from "react"
const CotizadorContext=createContext()
import { obtenerDiferencia,calcularMarca,calcularPlan } from "../helpers"


const CotizadorProvider = ({children}) => {

  const [datos,setDatos]=useState({
      marca:'',
      year:'',
      plan:''
  })

  const [resultado,setResultado]=useState(0)
  const [cargando,setCargando]=useState(false)
  const cotizar=()=>{
    /// base

    let resultado=2000;
    

    // diferencia de años

    const diferencia=obtenerDiferencia(datos.year)

    // se resta 3% por cada año
    resultado -=((diferencia*3)*resultado) / 100
 


    // europeo 30%
    // americano 15%
    // asiatico 5%
    resultado *= calcularMarca(datos.marca)


    // basico 20%
    // completo 50%
  
    resultado *= calcularPlan(datos.plan)


    //formatear
    resultado=Math.round(resultado)
    resultado= "$" + resultado 
    setCargando(true)

    setTimeout(() => {
      setResultado(resultado)
      setCargando(false)
    }, 2000);

    
 //parseInt(resultado)

  }
  const [error, setError] = useState('')


  const handleChangeDatos=e=>{
   setDatos({
    ...datos,
      [e.target.name]:e.target.value
   })
  }
  return (
    
      
      <CotizadorContext.Provider value={{
        datos,
        handleChangeDatos,error,
        setError,
        cotizar,
        resultado,
        cargando
      }}>
            {children}
      </CotizadorContext.Provider>
  )
}

export {
    CotizadorContext
}

export default CotizadorProvider
