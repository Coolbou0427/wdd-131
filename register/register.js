import { participantTemplate, successTemplate } from './Templates.js';

let participantCount = 1;

const addButton = document.getElementById("add");
const form = document.querySelector("form");
const summary = document.getElementById("summary");

// Event listener for Add Participant button
addButton.addEventListener("click", () => {
  participantCount++;
  const newParticipantHTML = participantTemplate(participantCount);
  // Insert new participant section right before the add button
  addButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
});

// Event listener for form submit
form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const feeTotal = totalFees();
  const adultName = document.getElementById("adult_name").value;
  form.classList.add("hide");  // Hides the form using CSS class
  summary.innerHTML = successTemplate({ adultName, participantCount, feeTotal });
}

// Function to sum fees from all fee inputs
function totalFees() {
  let feeElements = document.querySelectorAll("[id^='fee']");
  feeElements = [...feeElements]; // Convert NodeList to Array
  const total = feeElements.reduce((sum, feeInput) => {
    return sum + (parseFloat(feeInput.value) || 0);
  }, 0);
  return total;
}
