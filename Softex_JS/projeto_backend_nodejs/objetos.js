/*
Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, 
saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e 
número da conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do
 objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse 
projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.
*/

function Banco(conta, saldoconta, tipodeconta, agencia) {
        this.conta = conta;
        this.saldoconta = saldoconta;
        this.tipodeconta = tipodeconta;
        this.agencia = agencia;
        
        mostrarSaldo = function Saldo(){
            console.log()
        }
        
}

var mostrarSaldo = new Banco("1234", 1000.5, "contacorrente", "casaamarela");

console.log("Seu saldo em conta é: $",mostrarSaldo.saldoconta);
console.log("Agencia: ",mostrarSaldo.agencia);
