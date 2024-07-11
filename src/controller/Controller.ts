import { CartItem } from '../model/CartItem';

export class Controller {
    private carrinho: CartItem[] = [];

    adicionarItem(item: CartItem): void {
        this.carrinho.push(item);
    }

    removerItem(produtoId: number): void {
        this.carrinho = this.carrinho.filter(item => item.get_produto().get_Id() !== produtoId);
    }

    listarItem(): void {
        this.carrinho.forEach(item => {
            const produto = item.get_produto();
            console.log(`ID: ${produto.get_Id()}, Nome: ${produto.get_nome()}, Quantidade: ${item.get_quantidade()}, Preço Total: R$${produto.get_preco() * item.get_quantidade()}`);
        });
    }

    get_TotalPreco(): number {
        return this.carrinho.reduce((total, item) => total + (item.get_produto().get_preco() * item.get_quantidade()), 0);
    }
}
