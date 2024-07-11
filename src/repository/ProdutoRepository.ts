import { CartItem } from "../model/CartItem";

export interface ProdutoRepository {
    adicionarItem(item: CartItem): void;
    removerItem(productId: number): void;
    listarItems(): void;

}