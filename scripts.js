document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.style.display === 'flex' || nav.style.display === '';
      if (window.innerWidth <= 768) {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        toggle.setAttribute('aria-expanded', nav.style.display === 'flex' ? 'true' : 'false');
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        nav.style.display = 'flex';
      } else {
        nav.style.display = 'none';
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    if (window.innerWidth > 768) {
      nav.style.display = 'flex';
    }
  }

  var form = document.getElementById('contact-form');
  var whatsappBtn = document.getElementById('send-whatsapp');
  function collectFormData() {
    var nome = document.getElementById('nome').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefone = document.getElementById('telefone').value.trim();
    var mensagem = document.getElementById('mensagem').value.trim();
    return { nome: nome, email: email, telefone: telefone, mensagem: mensagem };
  }
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = collectFormData();
      if (!data.nome || !data.email || !data.telefone || !data.mensagem) {
        alert('Preencha todos os campos.');
        return;
      }
      var subject = 'Contato via site • Impulse Creator';
      var body = 'Nome: ' + data.nome + '%0D%0AEmail: ' + data.email + '%0D%0ATelefone: ' + data.telefone + '%0D%0AMensagem: ' + encodeURIComponent(data.mensagem);
      window.location.href = 'mailto:contato@impulsecreator.com.br?subject=' + encodeURIComponent(subject) + '&body=' + body;
    });
  }
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function () {
      var data = collectFormData();
      var texto = 'Olá, sou ' + (data.nome || '') + '.%0A' +
        'Email: ' + (data.email || '') + '%0A' +
        'Telefone: ' + (data.telefone || '') + '%0A' +
        'Mensagem: ' + encodeURIComponent(data.mensagem || '');
      window.open('https://wa.me/5524992666649?text=' + texto, '_blank');
    });
  }
});

