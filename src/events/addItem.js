import { Subject } from "rxjs";
import * as service from "./services/list";

export const addItemEvent = new Subject();

const addItem = (text) => service.addItem(text);

addItemEvent.subscribe(addItem);
