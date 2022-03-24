import {useState} from "react";

function App() {

  const [cidade, setCidade] = useState('')
  //primeiro parametro guarda o valor e a segunda manipula


  //criar uma funcao pra utilizar o setCidade
  const handleChange = (e:any) =>{
      setCidade(e.target.value)
  }

  const key = process.env.KEY;

  const handleSearch = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${cidade}&lang=pt`)
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

          <button className="btn btn-primary btn-lg">
            Pesquisar
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
