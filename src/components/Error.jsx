import useCotizador from "../hooks/useCotizador"

const Error = () => {

    const {error}=useCotizador()


  return (
    <div className="border text-center border-red-700 bg-red-700 text-white border-r-8 p-2 ">
        {error}
    </div>
  )
}

export default Error
