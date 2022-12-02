// Classe abstrata Veiculo
export abstract class Veiculo {
    constructor(
    public modelo: string,
    public marca: string,
    public cor: string,
    public numeroRodas: number,
    ) {}

    abstract get represent(): string;

    abstract get clone(): this;
}

  // Subclasses:
export class Carro extends Veiculo {
    constructor(
    public modelo: string,
    public marca: string,
    public cor: string,
    public numeroRodas: number,
    public numeroPortas: number,
    ) {
    super(modelo, marca, cor, numeroRodas);
    }

    // Mapeia e cria uma string com todos os elementos do objeto
    get represent(): string {
    let retorno = '';
    for (const v in this) {
        retorno += `${v} -> ${this[v]}\n`;
    }

    return retorno;
    }

    // Cria um clone de sí próprio em um novo objeto
    get clone(): this {
    const novoObj = Object.create(this);
    return novoObj;
    }
}

export class Onibus extends Veiculo {
    constructor(
    public modelo: string,
    public marca: string,
    public cor: string,
    public numeroRodas: number,
    public numeroOcupantes: number,
    ) {
    super(modelo, marca, cor, numeroRodas);
    }

    // Mapeia e cria uma string com todos os elementos do objeto
    get represent(): string {
    let retorno = '';
    for (const v in this) {
        retorno += `${v} -> ${this[v]}\n`;
    }

    return retorno;
    }

    // Cria um clone de sí próprio em um novo objeto
    get clone(): this {
    const novoObj = Object.create(this);
    return novoObj;
    }
}

  // Classe aplicação
export class Aplicacao {
    // Inicialização do array de ve
    private readonly arrayVeiculos: Veiculo[] = [];

    // Obtém os veículos de forma dinâmica
    constructor(...args: Veiculo[]) {
    for (const veiculo of args) {
        this.criarArray(veiculo);
    }
    }

    // Cria um array com 3 clones de cada veiculo para cada veículo da classe
    // Nesse caso, cria-se um array de 6 índices
    private criarArray(...veiculos: Veiculo[]): void {
    for (let v = 0; v < veiculos.length; v++) {
        for (let i = 0; i < 3; i++) {
        this.arrayVeiculos.push(veiculos[v].clone);
        }
    }
    }

    // Faz a saída de cada clone no console
    log(): void {
    let i = 1;
    for (const v of this.arrayVeiculos) {
        console.log(`Veiculo ${i++}: \n${v.represent}`);
    }
    return;
    }
}

  // Criação dos veículos
const carro = new Carro('HB20', 'Hyundai', 'branco', 4, 4);
const onibus = new Onibus('BRT articulado', 'Mercedes', 'azul', 4, 120);

  // Aplicação
const aplicacao = new Aplicacao(carro, onibus);
aplicacao.log();

/* Saída:
  Veiculo 1:
  modelo -> HB20
  marca -> Ford
  cor -> branco
  numeroRodas -> 4
  numeroPortas -> 4
  Veiculo 2:
  modelo -> HB20
  marca -> Ford
  cor -> branco
  numeroRodas -> 4
  numeroPortas -> 4
  Veiculo 3:
  modelo -> HB20
  marca -> Ford
  cor -> branco
  numeroRodas -> 4
  numeroPortas -> 4
  Veiculo 4:
  modelo -> BRT
  marca -> Mercedes
  cor -> azul
  numeroRodas -> 4
  numeroOcupantes -> 60
  Veiculo 5:
  modelo -> BRT
  marca -> Mercedes
  cor -> azul
  numeroRodas -> 4
  numeroOcupantes -> 60
  Veiculo 6:
  modelo -> BRT
  marca -> Mercedes
  cor -> azul
  numeroRodas -> 4
  numeroOcupantes -> 60
  */