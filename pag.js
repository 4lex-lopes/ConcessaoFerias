function calculo() {
  let dataInput = document.getElementById("data").value;
  let partesData = dataInput.split("/");
  let dia = parseInt(partesData[0]);
  let mes = parseInt(partesData[1]);
  let anoAtual = new Date().getFullYear();
  let anoInicial = parseInt(anoAtual);
  let diaFinal = parseInt(dia);
  let mesFinal = parseInt(mes);
  let anoFinal = parseInt(anoAtual) + 1;

  if (mes == 1) {
    mes = 12;
  } else {
    mes = mes - 1;
  }

  if (mes == 12) {
    anoInicial = anoInicial - 1;
  }

  if (document.getElementById("selecionar").value == "alterar") {
    document.getElementById("inicio").value = "01/" + mes + "/" + anoInicial;
    document.getElementById("fim").value =
      diaFinal + "/" + mesFinal + "/" + anoFinal;
  } else {
    document.getElementById("inicio").value =
      "01/" + mes + "/" + (anoInicial + 1);
    document.getElementById("fim").value =
      diaFinal + "/" + mesFinal + "/" + (anoFinal + 1);
  }
}
