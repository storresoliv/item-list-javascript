const save = (key, value) => {
  const valueString = JSON.stringify(value);
  try {
    localStorage.setItem(key, valueString);
  } catch (error) {
    console.warn(error);
  }
};

const load = (key) => {
  try {
    const rawValue = localStorage.getItem(key);

    return rawValue ? JSON.parse(rawValue) : [];
  } catch (error) {
    console.warn(error);
  }
};

export default function database() {
  return {
    save: save,
    load: load,
  };
}
