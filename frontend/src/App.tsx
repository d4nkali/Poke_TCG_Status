import { useEffect } from 'react';
import scriptPokemon from './script';
import './App.css'

function App() {

    useEffect(() => {

        scriptPokemon();

    }, []);

    return (

        <>

            <main>

            <h1>Pokémon TCG App</h1>

            {/* Gerenciar Pokémons em batalha */}

            <samp>Nome do Pokémon:</samp>
            <input type="text" id="nome_poke" placeholder="Nome do Pokémon"></input>
            <samp>Status:</samp>
            <select id="status_poke">

                <option className="normal" value="Normal">Normal</option>
                <option className="queimado" value="Queimado">Queimado</option>
                <option className="envenenado" value="Envenenado">Envenenado</option>
                <option className="adormecido" value="Adormecido">Adormecido</option>
                <option className="paralisado" value="Paralisado">Paralisado</option>
                <option className="confuso" value="Confuso">Confuso</option>

            </select>

            <button id="adicionar_poke">Adicionar Pokémon</button>

            <ul id="lista_poke"></ul>

            </main>

        </>

    )

}

export default App
