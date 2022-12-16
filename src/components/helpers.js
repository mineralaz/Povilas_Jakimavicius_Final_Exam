export async function sendPostRequest(objToSend, url) {
  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(objToSend),
    });
    if (!resp.ok) {
      throw await resp.json();
    }
    const result = await resp.json();
    return [result, null];
  } catch (error) {
    return [null, error];
  }
}

export function shopsObjectsObjToArr(shopsObj) {
  const shopsArr = [];
  for (const key in shopsObj) {
    const value = shopsObj[key];
    value.id = key;
    shopsArr.push(value);
  }
  return shopsArr;
}
