// src/model/ProdutoEletronico.ts
import { Produto } from './Produtos';

export class ProdutoEletronico extends Produto {
    constructor(id: number, nome: string, preco: number) {
        super(id, nome, preco);
    }

    get_Descricao(): string {
        return `Produto: ${this.get_nome()}`;
    }
}

