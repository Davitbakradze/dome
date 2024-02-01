/** @format */
function deleteButton() {
  let button = document.getElementById("deleteButton");

  button.remove();
}

let setImage = document.getElementById("setImage");

setImage.setAttribute(
  "src",
  "https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg"
);
setImage.setAttribute("width", "300px");
setImage.setAttribute("height", "300px");

function logText() {
  let inputElement = document.getElementById("textInput");

  let inputValue = inputElement.value;

  let outputElement = document.getElementById("output");

  outputElement.textContent = "You entered: " + inputValue;

  inputElement.value = "";
}

const productData = [
  { product_id: 1, amount: 200 },
  { product_id: 2, amount: 300 },
  { product_id: 3, amount: 500 },
];

const totalAmount = productData.reduce(
  (sum, product) => sum + product.amount,
  0
);

document.getElementById("totalAmount").textContent =
  totalAmount + "-ლ წლიური ხარჯი";
