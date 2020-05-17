import Button from "./Button";
import Text from "./Text";

export default function Item(content) {
  const item = document.createElement("li");

  const button = Button();
  const text = Text(content);

  item.appendChild(text);
  item.appendChild(button);

  return item;
}
