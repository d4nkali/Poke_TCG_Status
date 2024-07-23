window.addEventListener('DOMContentLoaded', () => {

    const botaoAdicionarPoke = document.getElementById('adicionar_poke');
    const entradaNomePoke = document.getElementById('nome_poke');
    const pokemonStatusSelect = document.getElementById('pokemon-status');
    const listaPokemon = document.getElementById('lista_poke');

    botaoAdicionarPoke.addEventListener('click', () => {

        const nomePokemon = entradaNomePoke.value.trim();
        const pokemonStatus = pokemonStatusSelect.value;
        if (nomePokemon && pokemonStatus) {

            const listItem = document.createElement('li');
            listItem.textContent = `${nomePokemon} - ${pokemonStatus}`;
            listItem.addEventListener('click', () => {

                const novoStatus = prompt(`Digite o novo status para ${nomePokemon} (Queimado, Envenenado, Adormecido, Paralizado, Confuso):`);
                if (novoStatus) {

                    listItem.textContent = `${nomePokemon} - ${novoStatus}`;

                }

            });

            listaPokemon.appendChild(listItem);
            entradaNomePoke.value = '';

        }

    });

});
