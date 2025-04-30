// Classe Parquímetro 
class Parquimetro {
    constructor(valor) {
      this.valor = parseFloat(valor);
      this.tempo = 0;
      this.troco = 0;
    }
  
    calcularTempo() {  // função para calcular
      if (this.valor < 1.00) {
        return "Valor insuficiente. Mínimo R$1,00.";
      }
  
      if (this.valor >= 3.00) {
        this.tempo = 120;
        this.troco = this.valor - 3.00;
      } else if (this.valor >= 1.75) {
        this.tempo = 60;
        this.troco = this.valor - 1.75;
      } else if (this.valor >= 1.00) {
        this.tempo = 30;
        this.troco = this.valor - 1.00;
      }
  
      return `Tempo: ${this.tempo} minutos<br>Troco: R$${this.troco.toFixed(2)}`;
    }
  }
  
  // função  quando  clica no botão
  function simular() {
    const valorInput = document.getElementById("valor").value;
    const resultadoDiv = document.getElementById("resultado");
  
    const parquimetro = new Parquimetro(valorInput);
    resultadoDiv.innerHTML = parquimetro.calcularTempo();
  }
  
  