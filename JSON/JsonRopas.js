// Funcionalidad del carrusel de productos
const carrusel = document.querySelector('.carrusel');
const tarjeta = document.querySelector('.tarjeta-producto');
const anchoTarjeta = tarjeta ? (tarjeta.offsetWidth + 20) : 0;
// 20px entre tarjetas, ajusta según el CSS
const onClickLeft = () => {
  if (!carrusel) return;
  carrusel.scrollBy({ left: -anchoTarjeta, behavior: 'smooth' });
};
// Función para el botón derecho
const onClickRight = () => {
  if (!carrusel) return;
  carrusel.scrollBy({ left: anchoTarjeta, behavior: 'smooth' });
};
// Inicializar eventos de los botones
const initCarrusel = () => {
  const izq = document.getElementById('flecha-izquierda');
  const der = document.getElementById('flecha-derecha');
  if (izq) izq.addEventListener('click', onClickLeft);
  if (der) der.addEventListener('click', onClickRight);
};

// Iniciar cuando DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCarrusel);
} else {
  initCarrusel();
}
