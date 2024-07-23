window.addEventListener('DOMContentLoaded', () => {

    const botaoAdicionarPoke = document.getElementById('adicionar_poke');
    const entradaNomePoke = document.getElementById('nome_poke');
    const selecaoStatusPoke = document.getElementById('status_poke');
    const listaPokemon = document.getElementById('lista_poke');

    botaoAdicionarPoke.addEventListener('click', () => {

        const nomePokemon = entradaNomePoke.value.trim();
        const pokemonStatus = selecaoStatusPoke.value;
        if (nomePokemon && pokemonStatus) {

            const listItem = document.createElement('li');
            listItem.textContent = `${nomePokemon} - ${pokemonStatus}`;
            listItem.addEventListener('click', () => {

                const novoStatus = prompt(`Digite o novo status para ${nomePokemon} (Queimado, Envenenado, Adormecido, Paralisado, Confuso):`);
                if (novoStatus) {

                    listItem.textContent = `${nomePokemon} - ${novoStatus}`;

                }

            });

            listaPokemon.appendChild(listItem);
            entradaNomePoke.value = '';

        }

    });

});
