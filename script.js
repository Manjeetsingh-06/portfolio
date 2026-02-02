
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
    console.log('Theme toggled:', document.body.classList.contains('light') ? 'Light' : 'Dark'); 
});

// Project Animations
window.addEventListener('load', () => {
    document.querySelectorAll('.project').forEach(project => {
        project.style.animationPlayState = 'running';
    });
});


let userBehavior = 'general';
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        userBehavior = 'java';
        const projects = document.querySelector('.projects');
        const javaProjects = Array.from(projects.children).filter(p => p.dataset.category === 'java');
        const otherProjects = Array.from(projects.children).filter(p => p.dataset.category !== 'java');
        projects.innerHTML = '';
        javaProjects.concat(otherProjects).forEach(p => projects.appendChild(p));
    }
});
