document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.getElementById('burgerButton');
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerIcon = document.getElementById('burgerIcon');
    const closeIcon = document.getElementById('closeIcon');

    burgerButton.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.contains('hidden');

      if (isOpen) {
        mobileMenu.classList.remove('hidden'); // Affiche le menu
        burgerIcon.classList.add('hidden'); // Cache l'icône burger
        closeIcon.classList.remove('hidden'); // Affiche l'icône de fermeture
      } else {
        mobileMenu.classList.add('hidden'); // Cache le menu
        burgerIcon.classList.remove('hidden'); // Affiche l'icône burger
        closeIcon.classList.add('hidden'); // Cache l'icône de fermeture
      }
    });
  });

const response = await fetch("projects.json");
const projects = await response.json();

const artProjet = document.getElementById("projects");
const projectElement = document.getElementsByClassName("projectElement")[0];

for (let i = 0; i < projects.length; i++) {
    const projets = projects[i];

    const artElement = document.createElement("article")
    artElement.classList.add("group","grid")

    const imgProject = document.createElement("img");
    imgProject.classList.add("aspect-square", "w-full", "rounded-lg", "bg-gray-200", "object-cover", "group-hover:opacity-75", "xl:aspect-[7/8]");
    imgProject.setAttribute("src", projets.img);
    imgProject.setAttribute("alt", projets.title);

    const titleProject = document.createElement("h3");
    titleProject.classList.add("mt-4", "text-center", "self-center", "text-lg", "font-medium", "text-gray-700");
    titleProject.textContent = projets.title;

    const githubProject = document.createElement("a");
    githubProject.classList.add("mt-1", "text-center", "text-lg", "text-gray-900", "justify-self-center");
    githubProject.textContent = "lien GitHub";
    githubProject.setAttribute("href", projets.link)

    projectElement.appendChild(artElement);
    artElement.appendChild(imgProject);
    artElement.appendChild(titleProject);
    artElement.appendChild(githubProject);

}


