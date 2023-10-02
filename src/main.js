const cursorFollower = document.getElementById('cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursorFollower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
