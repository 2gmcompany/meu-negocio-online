document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = this.querySelectorAll("input")[0].value;
  const negocio = this.querySelectorAll("input")[1].value;
  const whatsapp = this.querySelectorAll("input")[2].value;
  const email = this.querySelectorAll("input")[3].value;
  const pacote = this.querySelector("select").value;

  const mensagem = `Olá, sou ${nome}, dono(a) do negócio ${negocio}. Tenho interesse no pacote ${pacote}. Meu contacto é ${whatsapp} e email ${email}.`;

  const numero = "258833729339";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
});
