// API
const API_ENDPOINT = 'https://yesno.wtf/api';

const Button = document.getElementById("button");
const Span = document.getElementById("answer");
const Input = document.getElementById("input");
async function fetchAnswer() {
  if (Input.value == "") {
    return alert("Por favor, Escriba algo");
  } else {
    let query = await fetch(API_ENDPOINT);
    let response = await query.json();
    Span.innerHTML = response.answer;
    setTimeout(cleanContent, 5000);
    return console.log(response);
  }
}
function cleanContent() {
  Span.innerHTML = " ";
  Input.value = "";
}
Button.addEventListener("click", fetchAnswer);
/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
