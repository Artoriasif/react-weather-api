import {useState} from "react";
require('dotenv').config()

function App() {

  const [cidade, setCidade] = useState('')
  //primeiro parametro guarda o valor e a segunda manipula
  const [weatherForCast, setWeatherForCast] = useState<any>(null)


  //criar uma funcao pra utilizar o setCidade
  const handleChange = (e:any) =>{
      setCidade(e.target.value)
  }
  <pre>{process.env.REACT_APP_KEY_API}</pre>
  
  const handleSearch = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_KEY_API}&q=${cidade}&lang=pt`)
    .then((resp) => {
      if(resp.status === 200){
        return resp.json()
      }
    })
    .then((data) =>{
      console.log(data)
      setWeatherForCast(data)
    })
  }
  
  return (
    <div>
      <nav className="navbar navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <a href="#top" className="navbar-brand text-white">
            Previsao do Tempo
          </a>
      </nav>
      <main className="container">
        <div className="jumbotron">

          <h1>
            Verifique em tempo real a previsao do tempo da sua cidade!
          </h1>
          <p className="lead">
            Digite o nome da sua cidade no campo abaixo e em seguida clique em pesquisar
          </p>

          <div className="row mb-4">
              <div className="col-md-6">
                <input 
                  type="text"
                  className="form-control" 
                  placeholder="Digite o nome da sua cidade (ex: Teresopolis)" 
                  value={cidade}
                  onChange={handleChange}
                />
              </div>
          </div>

          <button onClick={handleSearch} className="btn btn-primary btn-lg">
            Pesquisar
          </button>

          {weatherForCast ? (
            <div className="mt-4 d-flex align-items-center">

              <div>
                <img src={weatherForCast.current.condition.icon} />
              </div>

              <div>
                <h3>Hoje o dia está: {weatherForCast.current.condition.text} </h3>
              </div>
              <p className="lead">
                Tempo: {weatherForCast.current.temp_c}&deg;
              </p>
            </div>
          ): null}
           
        </div>
      </main>
    </div>
  );
}

export default App;
