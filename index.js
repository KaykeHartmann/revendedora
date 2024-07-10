const prompt = require ("prompt-sync")();
while (true) {

let carro, marca, modelo, ano

    console.log(`

        "O que você deseja fazer?"+
        "\n1- selecionar carro"+
        "\n2- adicionar carro na lista da loja"+
        "\n3- remover carro da loja "+
        "\n4- sair do sistema"`);

    let opcao = prompt();
        
        switch (opcao) {
            case '1': 
                    console.log("voce selecionou o item 1 / selecionando os carros");
                    ler()
                break;

            case '2':
                    console.log("voce selecionou o item 2 / adicionar novo carro na lista");

                        carro = prompt("digite o nome do carro: ");
                        marca = prompt("Agora digite a marca do carro que voce quer: ");
                        modelo = prompt("Agora diga-me o modelo: ");
                        ano = prompt("Agora digite o ano: ");

            criar()

                break;  

            case '3':
                    console.log("voce selecionou o item 3 / remover carro da lista");

                         carro = prompt("digite o nome do carro: ");
                         marca = prompt("Agora digite a marca do carro que voce quer: ");
                         modelo = prompt("Agora diga-me o modelo: ");
                         ano = prompt("Agora digite o ano: ");

            remover()

                break;

            case '4':
                    console.log("voce selecionou o item 4 / saindo do sistema");
                    process.exit();
                break;
        
            default:
                break;
        }
    
}
