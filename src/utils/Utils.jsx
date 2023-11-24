export default class Utils {
  static lsSet(key, data) {
    return localStorage.setItem(key, JSON.stringify(data));
  }
  static lsGet(key) {
    let getItem = localStorage.getItem(key);
    if (getItem) return JSON.parse(getItem);
  }
}
