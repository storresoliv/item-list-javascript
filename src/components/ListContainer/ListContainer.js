import { updateListEvent } from "../../events/updateList";
import Item from "./Item/Item";

export default function ListContainer() {
  const container = document.createElement("ul");

  const appendItem = (newItem) => container.appendChild(newItem);

  const createItem = ({ text, id }) => Item(text, id);

  const addItem = (item) => appendItem(createItem(item));

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
