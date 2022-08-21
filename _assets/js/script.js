const start_car = new Audio("_components/audio/start.mp3");
const end_car = new Audio("_components/audio/end.mp3");
const acc_car = new Audio("_components/audio/acelerando.mp3");
const break_car = new Audio("_components/audio/break.mp3");

let carro = {
  nome: "JEEP ",
  modelo: "Rubicon Sunriser",
  peso: "1200kg",
  km: 0,
  ligado: false,
  velocidade_add: function () {
    if (carro.km > 0) {
      document.getElementById("text1").classList.remove("d-none");
      document.getElementById("text1").innerHTML = "RUUUNNNNNNN RUHNNNN";
    } else {
      document.getElementById("text1").classList.add("d-none");
    }
  },
  status: function () {
    if (carro.ligado == true) {
      document.getElementById("text").innerHTML = "Carro está ligado";
    } else {
      document.getElementById("text").innerHTML = "Carro está desligado";
    }
  },
  velocidade: function () {
    document.getElementById("velocidade").innerHTML = " " + carro.km + " Km";
  },
  ligar: function () {
    if (carro.ligado == true) {
      //Desligando o carro
      end_car.play();
      // Mexendo no botão
      document.getElementById("btnOn").classList.add("d-none");
      document.getElementById("btnOff").classList.remove("d-none");
      //Mexendo luzes do carro
      document.getElementById("carOn").classList.add("d-none");
      document.getElementById("carOff").classList.remove("d-none");
      //mexendo no texto
      document.getElementById("text").innerHTML = "Carro está desligado";
      document.getElementById("text1").classList.add("d-none");
      carro.ligado = false;
      carro.status();
    } else {
      //Ligando carro
      start_car.play();
      // Mexendo no botao
      document.getElementById("btnOff").classList.add("d-none");
      document.getElementById("btnOn").classList.remove("d-none");
      //Mexendo luzes do carro
      document.getElementById("carOff").classList.add("d-none");
      document.getElementById("carOn").classList.remove("d-none");

      //mexendo no texto
      document.getElementById("text").innerHTML = "Carro está ligado";
      carro.ligado = true;
      carro.status();
    }
  },
  acelerar: function () {
    if (carro.ligado == true) {
      //Som de Acelerando
      acc_car.play();
      // Aumentando velocidade
      carro.km = carro.km + 10;
      //Atulizando e colocando status
      carro.velocidade_add();
      carro.velocidade();
    } else {
      document.getElementById("text").innerHTML =
        carro.nome + " " + carro.modelo + " não esta ligado.";
    }
  },
  break: function () {
    if (carro.ligado == true) {
      if (carro.km > 30) {
        carro.km = carro.km - 10;
        //Escrevendo que reduzio
        document.getElementById("text1").innerHTML = "Carro reduziu 10 km/h";

        //Atulizando Status
        carro.velocidade();
        carro.status();
      } else if (carro.km > 0 && 30 >= carro.km) {
        carro.km = 0;
        //Escrevendo que reduzio
        document.getElementById("text1").innerHTML = "PUXOU O FREIO BRUSCAMENTE";
        
        carro.velocidade();
        carro.status();
        break_car.play();
      } else if(carro.km == 0) {

        carro.status();
        carro.velocidade_add();
        document.getElementById("text1").classList.remove("d-none");
        document.getElementById("text1").innerHTML = "Carro esta pardo";
      }
    } else {
    }
  },
};
carro.btn();
carro.velocidade();
carro.status();
