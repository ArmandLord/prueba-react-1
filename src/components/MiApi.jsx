import axios from "axios";
import { useEffect, useState } from "react";

// url api
const urlAPI = "https://api.victorsanmartin.com/feriados/en.json";

const MiApi = () => {
  const [feriados, setFeriados] = useState([]);

  // funcion async
  const traerFeriados = async () => {
    const { data } = await axios(urlAPI);
    setFeriados(data.data);
  };

  // useEffect
  useEffect(() => {
    traerFeriados();
  }, []);

  return (
    <div>
      {/* Crea otro componente llamado buscador, que filtre por alguno de los resultados de la
API. Por ejemplo, nombre, precio o cualquier otro tipo de criterio coherente con el
resultado de la API. */}
      {feriados.map((feriado) => (
        <h1
          style={{
            color: "#000",
          }}
          key={feriado.title}
        >
          {feriado.title}
        </h1>
      ))}
    </div>
  );
};

export default MiApi;
