import  readlineSync from 'readline-sync';
import { Produto } from './src/model/Produtos';
import { CartItem } from './src/model/CartItem';
import { Controller } from './src/controller/Controller';
import { ProdutoEletronico } from './src/model/ProdutoEletronico';


let controller = new Controller();
let total;

// Função para criar produtos
function criarProdutos (): Produto[] {
    return [
        new ProdutoEletronico (1, "Laptop", 1200),
        new ProdutoEletronico(2, "Smartphone", 800),
        new ProdutoEletronico (3, "Headphones", 150),
        new ProdutoEletronico (4, "Mouse", 50),
        new ProdutoEletronico (5, "Teclado", 100),
        new ProdutoEletronico (6, "Monitor", 300),
        new ProdutoEletronico (7, "Webcam", 80),
        new ProdutoEletronico (8, "Microfone", 70),
        new ProdutoEletronico (9, "Cadeira Gamer", 400),
        new ProdutoEletronico (10, "Mesa Gamer", 250),
        new ProdutoEletronico (11, "Gabinete Gamer", 150),
        new ProdutoEletronico (12, "Placa de Vídeo", 500),
        new ProdutoEletronico (13, "Processador", 300),
        new ProdutoEletronico (14, "Memória RAM", 100),
        new ProdutoEletronico (15, "Placa Mãe", 200),
        new ProdutoEletronico (16, "Fonte de Alimentação", 80),
        new ProdutoEletronico (17, "Cooler", 30),
        new ProdutoEletronico (18, "HD Externo", 120),
        new ProdutoEletronico (19, "SSD", 80),
        new ProdutoEletronico (20, "Roteador", 60),
    ];
}

// Função para exibir o menu e processar a entrada do usuário
function exibirMenu(): void {
    const produtos = criarProdutos();

    while (true) {
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                STAR TECNOLOGY SHOP                  ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Listar produtos disponíveis          ");
        console.log("            2 - Adicionar Produto ao Carrinho        ");
        console.log("            3 - Remover Produto do Carrinho          ");
        console.log("            4 - Ver carrinho e finalizar a compra    ");
        console.log("            5 - Sair                                 ");
        console.log("*****************************************************");
            
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
                    controller.adicionarItem(novoItem);
                    console.log(`Adicionado ${quantidade} ${produtoSelecionado.get_nome()}(s) ao carrinho.`);
                } else {
                    console.log("Produto não encontrado.");
                }
                break;

            case 3:
                const removerProdutoId = readlineSync.questionInt("Digite o ID do produto para remover do carrinho: ");
                controller.removerItem(removerProdutoId);
                console.log(`Removido produto ID ${removerProdutoId} do carrinho.`);
                break;

            case 4:
                console.log("\n=== Carrinho de Compras ===");
                controller.listarItem();
                total = controller.get_TotalPreco();
                console.log(`Custo Total: R$${total}`);
                console.log("Obrigado pela sua compra!")
                process.exit(0);
                
            case 5:
                console.log("Saindo...");
                process.exit(0);
                

            default:
                console.log("Escolha inválida. Por favor, digite um número entre 1 e 6.");
        }
    }
}
exibirMenu();