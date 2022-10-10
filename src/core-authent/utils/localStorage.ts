/**
 * Save string to storage
 * @param key
 * @param value
 */
 export function setLocal(key: string, value: string): void {
  window.localStorage[key] = value;
}

/**
* Get string from storage
* @param key
* @returns
*/
export function getLocal(key: string): string {
  return window.localStorage[key] || false;
}

/**
* Save object to storage
* @param key
* @param value
* @returns
*/
export function setObjectLocal(key: string, value: any): void {
  if (!value) {
      return;
  }
  window.localStorage[key] = JSON.stringify(value);
}

/**
* Get object form storage
* @param key
* @returns
*/
export function getObjectLocal(key: string): any {
  if (window.localStorage[key]) {
      return JSON.parse(window.localStorage[key]);
  } else {
      return null;
  }
}

/**
* Get value form storage
* @param key
* @returns
*/
export function getValueLocal(key: string): any {
  const obj = JSON.parse(window.localStorage[key] || null);
  return obj;
}

/**
* Remove item by key
* @param key
*/
export function removeLocal(key: string): any {
  window.localStorage.removeItem(key);
}

/**
* Clear all storage
*/
export function clearLocal(): void {
  window.localStorage.clear();
}