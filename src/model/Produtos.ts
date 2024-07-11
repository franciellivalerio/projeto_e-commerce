export  class  Produto {
    
    private _nome: string;
    private _preco: number;
    private _Id: number;

	constructor(Id: number, nome: string, preco: number) {
		this._nome = nome;
		this._preco = preco;
		this._Id= Id;
	}


	public get_nome(): string {
		return this._nome;
	}

	public get_preco(): number {
		return this._preco;
	}

	public get_Id(): number {
		return this._Id;
	}

	public set_nome(value: string) {
		this._nome = value;
	}

	public set_preco(value: number) {
		this._preco = value;
	}

	public set_Id(value: number) {
		this._Id = value;
	}

}

