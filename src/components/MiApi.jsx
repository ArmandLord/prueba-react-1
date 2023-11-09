import axios from "axios";
import { useEffect, useState } from "react";
import Buscador from "./Buscador/Buscador";

// url api
const urlAPI = "https://api.victorsanmartin.com/feriados/en.json";

const MiApi = () => {
  const [feriados, setFeriados] = useState([]);
  const [buscador, setBuscador] = useState("");
  // funcion async
  const traerFeriados = async () => {
    const { data } = await axios(urlAPI);
    const dataOrdenada = data.data.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    //data.data.sort((a, b) => (a.date > b.date ? 1 : -1 )) lo que mandó leo
    setFeriados(dataOrdenada);
  };

  // useEffect
  useEffect(() => {
    traerFeriados();
  }, []);

  // const filtrar = () => {
  // const feriadoFiltrado = feriados.filter((feriado) => {
  //     return feriado.title.toLowerCase().includes(buscador.toLowerCase());
  //   });
  //   console.log(feriadoFiltrado);
  // };
  return (
    <div>
      <Buscador buscador={buscador} setBuscador={setBuscador} />
      {feriados
        .filter((feriado) => {
          return (
            feriado.title.toLowerCase().includes(buscador.toLowerCase()) ||
            feriado.type.toLowerCase().includes(buscador.toLowerCase())
          );
        })
        .map((feriado) => (
          <p
            style={{
              color: "#000",
            }}
            key={feriado.title}
          >
            {feriado.title}
          </p>
        ))}
    </div>
  );
};

export default MiApi;
