window.addEventListener("scroll", function () {
  const container = document.querySelector(".container_pokemon");
  const scrollPosition = window.scrollY;

  // Obtener la altura de la ventana del navegador
  const windowHeight = window.innerHeight;

  // Obtener la altura total del contenido dentro del contenedor
  const contentHeight = container.clientHeight;

  // Calcular la posición máxima en la que el contenedor debe detenerse
  const maxPosition = contentHeight - windowHeight;

  // Asegurarse de que la posición no exceda el máximo
  const newPosition = Math.min(maxPosition, scrollPosition);
});
