document.addEventListener("DOMContentLoaded", function () {
    // Cacher toutes les images sauf la première
    const allProjects = document.querySelectorAll('.img-centre > div');
    allProjects.forEach((project, index) => {
        project.style.display = index === 0 ? 'block' : 'none';
    });

    let lastDisplayedProject = allProjects[0].id;

    const projectLinks = document.querySelectorAll('.liste-projet a');

    function hideAllProjectImages() {
        allProjects.forEach(div => {
            div.style.display = 'none';
        });
    }

    let currentHoveredLink = null; // Track le lien actuellement survolé

    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            currentHoveredLink = link;  // MAJ du lien survolé

            hideAllProjectImages();

            const linkId = link.id;
            const projectId = linkId.replace('lien-', '');
            const projectImage = document.getElementById(projectId);

            if (projectImage) {
                projectImage.style.display = 'block';
                lastDisplayedProject = projectId;
            }
        });

        link.addEventListener('mouseleave', () => {
            // Si aucun lien n'est actuellement survolé
            if (!currentHoveredLink || currentHoveredLink === link) {
                const projectImage = document.getElementById(lastDisplayedProject);
                if (projectImage) {
                    hideAllProjectImages();
                    projectImage.style.display = 'block';
                }
                currentHoveredLink = null;
            }
        });
    });
});