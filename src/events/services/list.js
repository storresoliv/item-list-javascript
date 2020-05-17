import database from "../../libs/database";
import { Subject } from "rxjs";

let list = [];

export const list$ = new Subject();

export function addItem(text) {
  list.push(text);
  update();
  saveList();
}

export function removeItem(id) {
  //
  update();
  saveList();
}

export function setList() {
  list = loadList();
  update();
}

function update() {
  list$.next(list);
}

const KEY = "list";

function saveList() {
  database().save(KEY, list);
}

function loadList() {
  return database().load(KEY);
}
