export default function Text(innerText) {
  const text = document.createElement("p");

  text.innerHTML = innerText;

  return text;
}
