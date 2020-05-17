import { Subject } from "rxjs";
import * as service from "./services/list";

export const removeItemEvent = new Subject();

const removeItem = (id) => service.removeItem(id);

removeItemEvent.subscribe(removeItem);
