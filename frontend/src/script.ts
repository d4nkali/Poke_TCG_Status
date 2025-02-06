function scriptPokemon() {

    const botaoAdicionarPoke = document.getElementById('adicionar_poke') as HTMLButtonElement | null;
    const entradaNomePoke = document.getElementById('nome_poke') as HTMLInputElement | null;
    const selecaoStatusPoke = document.getElementById('status_poke') as HTMLSelectElement | null;
    const listaPokemon = document.getElementById('lista_poke') as HTMLUListElement | null;

    if (!botaoAdicionarPoke || !entradaNomePoke ||
        !selecaoStatusPoke || !listaPokemon ) {

        console.warn('Elementos HTML não foram encontrados.');
        return;

    }

    botaoAdicionarPoke.addEventListener('click', () => {

        const nomePokemon = entradaNomePoke.value.trim();
        const pokemonStatus = selecaoStatusPoke.value;

        if (nomePokemon && pokemonStatus) {

            const listItem = document.createElement('li');

            const conteudoPokemon = document.createElement('span');
            conteudoPokemon.textContent = `${nomePokemon} - ${pokemonStatus}`;

            const botaoEditar = document.createElement('button');
            botaoEditar.textContent = 'Editar';
            botaoEditar.addEventListener('click', () => {

                const novoStatus = prompt(
                    `Digite o novo status para ${nomePokemon}:`,
                );
                if (novoStatus) {
                    conteudoPokemon.textContent = `${nomePokemon} - ${novoStatus}`;
                }

            });

            const botaoRemover = document.createElement('button');
            botaoRemover.textContent = 'Remover';
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

}

export default scriptPokemon;
