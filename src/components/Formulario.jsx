import React, { Fragment } from "react";
import { marcas, years, planes } from "../constants";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";
const Formulario = () => {
  const { datos, handleChangeDatos,error,setError,cotizar } = useCotizador();



  
  const handleSubmit=e=>{
    e.preventDefault()

    if(Object.values(datos).includes('')){
      setError('Todos los campos son obligatorios')
      return
    }

    setError('')
   
    cotizar()

  }

  return (
    <>


    {error && <Error/> }

      <form className=""
      onSubmit={handleSubmit}
      
      >
        <div className="my-5">
          <label className="block mb-3 font-bold">Marca</label>

          <select name="marca" className="w-full " onChange={(e) => handleChangeDatos(e)} id="" value={datos.marca}>
            <option value="">Selecciona la Marca</option>

            {marcas.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold">año</label>

          <select
          value={datos.year}
            name="year"
            className="w-full rounded border-spacing-x-8 border border-blue-500"
            onChange={(e) => handleChangeDatos(e)}
      
          >
            <option value="">Selecciona el año</option>

            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold">Plan</label>

          <div className="flex gap-3">
            {planes.map((plan) => (
              <Fragment>
                <label>{plan.nombre}</label>
                <input
                  type="radio"
                  onChange={(e) => handleChangeDatos(e)}
                  name="plan"
                  value={plan.id}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <button className="text-center bg-violet-900 text-white p-2 mx-auto w-full">Cotizar</button>
      </form>
    </>
  );
};

export default Formulario;
