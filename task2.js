document.addEventListener("DOMContentLoaded", () => {
    const projectNameInput = document.getElementById("project-name");
    const addProjectButton = document.getElementById("add-project-btn");
    const projectsContainer = document.getElementById("projects");

    addProjectButton.addEventListener("click", () => {
        const projectName = projectNameInput.value.trim();
        if (projectName !== "") {
            const projectCard = document.createElement("div");
            projectCard.className = "project-card";
            projectCard.innerHTML = `
                <h2>${projectName}</h2>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button class="delete-btn">Delete</button>
            `;

            const deleteButton = projectCard.querySelector(".delete-btn");
            deleteButton.addEventListener("click", () => {
                projectCard.remove();
            });

            projectsContainer.appendChild(projectCard);
            projectNameInput.value = "";
        }
    });
});
