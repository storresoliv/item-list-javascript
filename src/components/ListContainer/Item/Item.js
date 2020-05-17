import { fromEvent } from "rxjs";
import Button from "./Button";
import Text from "./Text";
import { removeItemEvent } from "../../../events/removeItem";

const onClick = (element) => fromEvent(element, "click");

export default function Item(content, id) {
  const item = document.createElement("li");

  const button = Button();
  const text = Text(content);

  item.appendChild(text);
  item.appendChild(button);

  onClick(button).subscribe((_) => {
    removeItemEvent.next(id);
  });

  return item;
}
