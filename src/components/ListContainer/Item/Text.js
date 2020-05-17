export default function Text(innerText) {
  const text = document.createElement("a");

  text.innerHTML = innerText;

  return text;
}
