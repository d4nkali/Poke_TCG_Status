window.addEventListener('DOMContentLoaded', () => {

    // Pega os id do HTML para variáveis no Javascript

        const botaoAdicionarPoke = document.getElementById('adicionar_poke');
        const entradaNomePoke = document.getElementById('nome_poke');
        const selecaoStatusPoke = document.getElementById('status_poke');
        const listaPokemon = document.getElementById('lista_poke');

    botaoAdicionarPoke.addEventListener('click', () => { //* Evento de quando clicar em adicionar pokemon

        const nomePokemon = entradaNomePoke.value.trim();
        const pokemonStatus = selecaoStatusPoke.value;
        if (nomePokemon && pokemonStatus) { //* Se tiver o campo de nome e status preenchidos, então:

            const listItem = document.createElement('li'); // Cria um elemento lista
            listItem.textContent = `${nomePokemon} - ${pokemonStatus}`;
            listItem.addEventListener('click', () => {

                const novoStatus = prompt(`Digite o novo status para ${nomePokemon} (Normal, Queimado, Envenenado, Adormecido, Paralisado, Confuso):`);
                if (novoStatus) { //* Se tiver um novo status:

                    listItem.textContent = `${nomePokemon} - ${novoStatus}`; // Atualiza os campos

                }

            });

            listaPokemon.appendChild(listItem); //? Adiciona o novo item a lista
            entradaNomePoke.value = ''; // Limpa os campos

        }

    });

});
