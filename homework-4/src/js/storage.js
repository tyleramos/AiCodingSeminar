const LOCAL_STORAGE_NAMESPACE = 'simpsons-quotes';

const storageKeyName = (key) => {
  return `${LOCAL_STORAGE_NAMESPACE}.${key}`;
};

const Storage = {
  add(key, value) {
    const quotes = Storage.load(key);
    quotes.push(value);
    window.localStorage.setItem(storageKeyName(key), JSON.stringify(quotes));
  },
  load(key) {
    return JSON.parse(window.localStorage.getItem(storageKeyName(key))) || [];
  },
  empty(key) {
    window.localStorage.clear();
  }
};

export default Storage;
