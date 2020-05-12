export const storageService = {
  storeData,
  getData,
  removeData,
};

function storeData(key: string, data: string = '') {
  sessionStorage.setItem(key, data);
}

function getData(key: string) {
  return sessionStorage.getItem(key);
}

function removeData(key: string) {
  sessionStorage.removeItem(key);
}
