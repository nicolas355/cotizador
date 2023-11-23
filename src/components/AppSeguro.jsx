import Formulario from "./Formulario";
import useCotizador from "../hooks/useCotizador";
import Spiner from "./Spiner";
import Resultado from "./Resultado";
const AppSeguro = () => {

  const {resultado,cargando}=useCotizador()
  return (
    <>
  

      <header className="my-10">
        <h1>Cotizador de seguros de autos</h1>
      </header>

      <main className="p-10  grid grid-cols-1 bg-white  rounded-2xl   sm:w-[600px] ">
        <Formulario />
    
          {cargando ? <Spiner/>: <Resultado/>}
      </main>
  
    </>
  );
};

export default AppSeguro;
