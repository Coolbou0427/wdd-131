import { recipes } from "./recipes.mjs"

document.addEventListener("DOMContentLoaded", () => {
  const mainElement = document.querySelector("main")
  recipes.forEach(recipe => {
    const section = document.createElement("section")
    section.className = "recipe"
    const img = document.createElement("img")

    img.src = recipe.image
    img.alt = recipe.title

    section.appendChild(img)
    const contentDiv = document.createElement("div")
    contentDiv.className = "recipe-content"
    const tagsDiv = document.createElement("div")
    tagsDiv.className = "tags"

    recipe.tags.forEach(tag => {
      const span = document.createElement("span")
      span.className = "tag"
      span.textContent = tag
      tagsDiv.appendChild(span)
    })

    contentDiv.appendChild(tagsDiv)
    const h2 = document.createElement("h2")
    h2.textContent = recipe.title
    contentDiv.appendChild(h2)
    const ratingSpan = document.createElement("span")

    ratingSpan.className = "rating"
    ratingSpan.setAttribute("role", "img")
    ratingSpan.setAttribute("aria-label", `Rating: ${recipe.rating} out of 5 stars`)

    let ratingHTML = ""

    for (let i = 0; i < recipe.rating; i++) {
      ratingHTML += '<span aria-hidden="true">⭐</span>'
    }
    for (let i = recipe.rating; i < 5; i++) {
      ratingHTML += '<span aria-hidden="true">☆</span>'
    }

    ratingSpan.innerHTML = ratingHTML
    contentDiv.appendChild(ratingSpan)
    const p = document.createElement("p")
    p.className = "description"
    p.textContent = recipe.description
    contentDiv.appendChild(p)
    section.appendChild(contentDiv)
    mainElement.appendChild(section)
  })
})
