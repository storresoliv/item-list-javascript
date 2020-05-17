import * as service from "./events/services/list";

import InputContainer from "./components/InputContainer/InputContainer";
import ListContainer from "./components/ListContainer/ListContainer";

export default function App() {
  addComponent(InputContainer());
  addComponent(ListContainer());

  service.setList();
}

function addComponent(component) {
  document.body.appendChild(component);
}
