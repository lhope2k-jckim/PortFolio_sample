'use strict';

// 프로젝트 필터링 관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', async (event) => {
    const filter = event.target.dataset.category;
    if (filter == null) {
        return;
    }

    handleActiveSelection(event.target);
    await filterProjects(filter);
});

function handleActiveSelection(target) {
    const active = document.querySelector('.category--selected');

    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}

async function filterProjects(filter) {
    const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));

    projectsContainer.classList.add('anim-out');
    await wait(250);

    projects.forEach((project) => {
        if (filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });

    projectsContainer.classList.remove('anim-out');
}