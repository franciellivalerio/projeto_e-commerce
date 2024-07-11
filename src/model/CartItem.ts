import { Produto } from "./Produtos";

export class CartItem {
    adicionarItem(novoItem: CartItem) {
        throw new Error('Method not implemented.');
    }
    removerItem(removerProdutoId: number) {
        throw new Error('Method not implemented.');
    }
    listarItens() {
        throw new Error('Method not implemented.');
    }
    getCustoTotal() {
        throw new Error('Method not implemented.');
    }
    get_TotalPreco() {
        throw new Error("Method not implemented.");
    }
	
	private _produto: Produto;
	private _quantidade: number;
	private _Id: string;

	constructor(produto: Produto, quantidade: number, Id: string) {
		this._produto = produto;
		this._quantidade = quantidade;
		this._Id = Id;
	}

	public get_produto(): Produto {
		return this._produto;
	}

	public get_quantidade(): number {
		return this._quantidade;
	}

	public get_Id(): string {
		return this._Id;
	}

	public set_produto(value: Produto) {
		this._produto = value;
	}

	public set_quantidade(value: number) {
		this._quantidade = value;
	}

	public set_Id(value: string) {
		this._Id = value;
	}
}
