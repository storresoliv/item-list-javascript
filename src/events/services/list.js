import database from "../../libs/database";
import { Subject } from "rxjs";

const KEY_LIST = "list";
const KEY_ID = "lastId";

let list = [];
let lastId = 0;

export const list$ = new Subject();

export function addItem(text) {
  list.push(createNewItem(text));
  update();
  saveList();
  saveLastId();
}

export function removeItem(id) {
  const index = findIndexById(id);
  if (index > -1) {
    list.splice(index, 1);
  }

  update();
  saveList();
}

export function setList() {
  list = loadList() || [];
  lastId = list.length ? loadLastId() : 0;
  update();
}

function createNewItem(text) {
  return {
    text,
    id: lastId++,
  };
}

function findIndexById(id) {
  return list.findIndex((item) => item.id === id);
}

function update() {
  list$.next(list);
}

function saveList() {
  database().save(KEY_LIST, list);
}

function saveLastId() {
  database().save(KEY_ID, lastId);
}

function loadList() {
  return database().load(KEY_LIST);
}

function loadLastId() {
  return database().load(KEY_ID);
}
