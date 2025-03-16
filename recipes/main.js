import { recipes } from "./recipes.mjs";

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  return list[random(list.length)];
}

function tagsTemplate(tags) {
  let html = "";
  tags.forEach(tag => {
    html += `<li>${tag}</li>`;
  });
  return html;
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `<figure class="recipe">
    <img src="${recipe.image}" alt="image of ${recipe.title}" />
    <figcaption>
      <ul class="recipe__tags">
        ${tagsTemplate(recipe.tags)}
      </ul>
      <h2><a href="#">${recipe.title}</a></h2>
      <p class="recipe__ratings">
        ${ratingTemplate(recipe.rating)}
      </p>
      <p class="recipe__description">
        ${recipe.description}
      </p>
    </figcaption>
  </figure>`;
}

function renderRecipes(recipeList) {
  const mainElement = document.querySelector("main");
  let html = "";
  recipeList.forEach(recipe => {
    html += recipeTemplate(recipe);
  });
  mainElement.innerHTML = html;
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

function filterRecipes(query) {
  const filtered = recipes.filter(recipe => {
    const lowerName = recipe.title.toLowerCase();
    const lowerDesc = recipe.description.toLowerCase();
    const lowerTags = recipe.tags.map(tag => tag.toLowerCase());
    return lowerName.includes(query) ||
           lowerDesc.includes(query) ||
           lowerTags.some(tag => tag.includes(query));
  });
  return filtered.sort((a, b) => a.title.localeCompare(b.title));
}

function searchHandler(e) {
  e.preventDefault();
  const searchInput = document.querySelector('header input[type="search"]');
  const query = searchInput.value.toLowerCase();
  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
}

document.addEventListener("DOMContentLoaded", () => {
  init();
  const searchForm = document.querySelector('header form');
  searchForm.addEventListener("submit", searchHandler);
});
