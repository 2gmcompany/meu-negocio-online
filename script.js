document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura os dados
    const nome = document.getElementById('nome').value;
    const empresa = document.getElementById('empresa').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const pacote = document.getElementById('pacote-interesse').value;

    // Mensagem formatada para o WhatsApp
    const mensagem = `Olá! Vi sua landing page "Meu Negócio Online".
*Nome:* ${nome}
*Empresa:* ${empresa}
*Contacto:* ${whatsapp}
*Interesse:* Pacote ${pacote}

Quero tornar meu negócio visível!`;

    const encodedMessage = encodeURIComponent(mensagem);
    const whatsappUrl = `https://wa.me/258833729339?text=${encodedMessage}`;

    // Redireciona
    window.open(whatsappUrl, '_blank');
});

// Suavização simples para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
