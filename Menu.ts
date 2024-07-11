import * as readlineSync from 'readline-sync';
import { Produto } from './src/Produtos';
import { CartItem } from './src/CartItem';
import { ShoppingCart } from './src/ShoppingCart';



// Função para criar produtos
function criarProdutos (): Produto[] {
    return [
        new Produto(1, "Laptop", 1200),
        new Produto(2, "Smartphone", 800),
        new Produto(3, "Headphones", 150),
        new Produto(4, "Mouse", 50),
        new Produto(5, "Teclado", 100),
        new Produto(6, "Monitor", 300),
        new Produto(7, "Webcam", 80),
        new Produto(8, "Microfone", 70),
        new Produto(9, "Cadeira Gamer", 400),
        new Produto(10, "Mesa Gamer", 250),
        new Produto(11, "Gabinete Gamer", 150),
        new Produto(12, "Placa de Vídeo", 500),
        new Produto(13, "Processador", 300),
        new Produto(14, "Memória RAM", 100),
        new Produto(15, "Placa Mãe", 200),
        new Produto(16, "Fonte de Alimentação", 80),
        new Produto(17, "Cooler", 30),
        new Produto(18, "HD Externo", 120),
        new Produto(19, "SSD", 80),
        new Produto(20, "Roteador", 60),
    ];
}

// Função para exibir o menu e processar a entrada do usuário
function exibirMenu(): void {
    const produtos = criarProdutos();
    const produto = new Produto(1, "Produto exemplo", 100); // Replace the values with the actual values for the product
    const carrinho = new CartItem(produto, 80, "7");

    while (true) {
        console.log("\n=== Menu de E-commerce ===");
        console.log("1. Listar Produtos");
        console.log("2. Adicionar Produto ao Carrinho");
        console.log("3. Remover Produto do Carrinho");
        console.log("4. Ver Carrinho");
        console.log("5. Registrar Usuário");
        console.log("6. Finalizar Compra");
        console.log("7. Sair");

        const escolha = readlineSync.questionInt("Digite sua escolha: ");

        switch (escolha) {
            case 1:
                console.log("\n=== Produtos Disponíveis ===");
                produtos.forEach(produto => {
                    console.log(`ID: ${produto.get_Id()}, Nome: ${produto.get_nome()}, Preço: R$${produto.get_preco()}`);
                });
                break;

            case 2:
                const produtoId = readlineSync.questionInt("Digite o ID do produto para adicionar ao carrinho: ");
                const produtoSelecionado = produtos.find(produto => produto.get_Id() === produtoId);

                if (produtoSelecionado) {
                    const quantidade = readlineSync.questionInt(`Digite a quantidade para ${produtoSelecionado.get_nome()}: `);
                    const novoItem = new CartItem(produtoSelecionado, quantidade, "1");
                    carrinho.adicionarItem(novoItem);
                    console.log(`Adicionado ${quantidade} ${produtoSelecionado.get_nome()}(s) ao carrinho.`);
                } else {
                    console.log("Produto não encontrado.");
                }
                break;

            case 3:
                const removerProdutoId = readlineSync.questionInt("Digite o ID do produto para remover do carrinho: ");
                carrinho.removerItem(removerProdutoId);
                console.log(`Removido produto ID ${removerProdutoId} do carrinho.`);
                break;

            case 4:
                console.log("\n=== Carrinho de Compras ===");
                carrinho.listarItens();
                console.log(`Custo Total: R$${carrinho.getCustoTotal()}`);
                break;

            case 5:
                console.log("\n=== Finalizar Compra ===");
                console.log(`Custo Total: R$${carrinho.getCustoTotal()}`);
                console.log("Obrigado pela sua compra!");
                process.exit(0);
                

            case 6:
                console.log("Saindo...");
                process.exit(0);
                

            default:
                console.log("Escolha inválida. Por favor, digite um número entre 1 e 6.");
        }
    }
}

// Executa o menu
exibirMenu();