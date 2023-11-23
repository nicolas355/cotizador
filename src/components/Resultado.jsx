import useCotizador from "../hooks/useCotizador"
import { marcas,planes } from "../constants"
import { useCallback,useRef } from "react"



const Resultado = () => {

    const {resultado,datos}=useCotizador()
    const {marca,plan,year}=datos

 

    const [nombreMarca]=useCallback(
      marcas.filter((m)=> m.id === Number(marca)),[resultado]
    )
    const [nombrePlan]=useCallback(planes.filter((p)=> p.id === Number(plan)),[resultado])

    const yearRef=useRef(year)
    if(resultado === 0) return null
  return (
    <div className="bg-grey-100 text-center mt-5 p-5 shadow ">
      <h2 className="text-gray-600 font-black text-3xl">
        Resumen
      </h2>

      <p className="m-2">
        <span className="font-bold">
          Marca:
        </span>

        {nombreMarca.nombre}
      </p>

      <p className="m-2">
        <span className="font-bold">
          Plan:
        </span>

        {nombrePlan.nombre}
      </p>


      <p className="m-2">
        <span className="font-bold">
          Año del Auto:
        </span>

        {yearRef.current}
      </p>



      <p className="m-2 text-2xl">
        <span className="font-bold">
          Total Cotizacion:
        </span>

        {resultado}
      </p>



    </div>
  )
}

export default Resultado
