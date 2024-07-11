import { CartItem } from './CartItem';

export class ShoppingCart {
    private items: CartItem[] = [];

    adicionarItem(item: CartItem): void {
        this.items.push(item);
    }

    removerItem(productId: number): void {
        this.items = this.items.filter(item => item.get_produto().get_Id() !== productId);
    }

    get_TotalPreco(): number {
            return 0;
        }
    
    listarItems(): void {
        this.items.forEach(item => {
            console.log(`Produtos: ${item.get_produto().get_nome()}, Quantidade: ${item.get_quantidade()}, Total da compra: ${item.get_TotalPreco()}`);
        });
    }
}
