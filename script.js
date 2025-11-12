const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open');
});

dropdownItems.forEach(item => {
  item.addEventListener('click', () => {
    // Quitar selección previa
    dropdownItems.forEach(i => i.classList.remove('selected'));

    // Marcar seleccionado
    item.classList.add('selected');

    // Cambiar texto del toggle
    dropdownToggle.textContent = item.textContent;

    // Cerrar menú
    dropdownMenu.classList.remove('open');
  });
});

// Cerrar dropdown si clic fuera
document.addEventListener('click', (e) => {
  if (!e.target.closest('.custom-dropdown')) {
    dropdownMenu.classList.remove('open');
  }
});
