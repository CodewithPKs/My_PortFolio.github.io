const showProject = document.getElementById('project-show');
const openProject = document.getElementById('onclick-show');

showProject.addEventListener('click', () => {
    openProject.classList.toggle('wrapper');
})