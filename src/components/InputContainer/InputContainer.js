import Input from "./Input";
import Button from "./Button";
import { fromEvent } from "rxjs";
import { addItemEvent } from "../../events/addItem";

const onClick = (element) => fromEvent(element, "click");

const getInputText = (input) => input.value;

export default function InputContainer() {
  const InputContainer = document.createElement("div");

  const button = Button();
  const input = Input();

  InputContainer.appendChild(input);
  InputContainer.appendChild(button);

  onClick(button).subscribe((res) => {
    const inputText = getInputText(input);
    const text = inputText.toLowerCase();

    input.value = "";

    if (text) {
      addItemEvent.next(text);
    }
  });

  return InputContainer;
}
