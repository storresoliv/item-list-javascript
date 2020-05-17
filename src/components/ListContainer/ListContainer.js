import { updateListEvent } from "../../events/updateList";
import Item from "./Item/Item";

export default function ListContainer() {
  const container = document.createElement("ul");

  const appendItem = (item) => container.appendChild(item);

  const createItem = (text) => Item(text);

  const addItem = (text) => appendItem(createItem(text));

  const update = (list) => list.map(addItem);

  const clearList = () => {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  };

  const clearAndUpdate = (list) => {
    clearList();
    return update(list);
  };

  updateListEvent.subscribe(clearAndUpdate);

  return container;
}
