// Mic efect de mișcare pentru stele la mișcarea mouse-ului
document.addEventListener('mousemove', e => {
  const stars = document.querySelector('.stars');
  const x = e.clientX / window.innerWidth * 20;
  const y = e.clientY / window.innerHeight * 20;
  stars.style.transform = `translate(${x}px, ${y}px)`;
});
