const binary = document.getElementById("binary");
const button = document.querySelector(".btn");
const result = document.querySelector(".result");

button.addEventListener("click", function(e) {
    e.preventDefault();
    result.innerHTML = `Decimal Number : ${parseInt(binary.value, 2)}`;
  });

