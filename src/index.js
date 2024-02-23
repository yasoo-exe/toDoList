import "./style.css";

function app() {
  const element = document.createElement("div");
  element.innerHTML = "hello world!";
  element.classList.add("hello");
  element.classList.add("mx-5");

  return element;
}

document.querySelector("#root").appendChild(app());
