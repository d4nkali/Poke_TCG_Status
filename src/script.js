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

            const conteudoPokemon = document.createElement('span');
            conteudoPokemon.textContent = `${nomePokemon} - ${pokemonStatus}`;

            const botaoEditar = document.createElement('button');
            botaoEditar.textContent = 'Editar';
            botaoEditar.id = `botao-editar`

            botaoEditar.addEventListener('click', () => {
                const novoStatus = prompt(`Digite o novo status para ${nomePokemon} (Normal, Queimado, Envenenado, Adormecido, Paralisado, Confuso):`);
                if (novoStatus) {
                    conteudoPokemon.textContent = `${nomePokemon} - ${novoStatus}`;
                }
            });

            const botaoRemover = document.createElement('button');
            botaoRemover.textContent = 'Remover';
            botaoRemover.id = `botao-remover`

            botaoRemover.addEventListener('click', () => {
                listaPokemon.removeChild(listItem);
            });

            listItem.appendChild(conteudoPokemon);
            listItem.appendChild(botaoEditar);
            listItem.appendChild(botaoRemover);

            listaPokemon.appendChild(listItem);

            entradaNomePoke.value = '';

        }

    });

});
