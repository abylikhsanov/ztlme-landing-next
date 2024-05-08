async function getResponse(url: string, method: string, data?: any) {
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };

  const options: RequestInit = {
    method: method,
    headers: headers,
    credentials: "include",
    body: JSON.stringify(data)
  }

  if (method === 'POST' && data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Request failed:', error);
    throw error;  // Rethrow to let the caller handle it
  }
}

export function GetUrlRoot() {
  return "https://ztlme-api-05a97b131bda.herokuapp.com";
  //return "https://75a9-84-48-48-163.ngrok-free.app";
}

export async function GetSignUpStatus(payload: any) {
  const data = await getResponse(`${GetUrlRoot()}/api/Auth/signup`, "POST", payload)
  return data;
}

// Not used
export async function GetAuthStatus() {
  //const data = await getResponse("https://75a9-84-48-48-163.ngrok-free.app/api/Auth/isAuth", "GET");
  const data = await getResponse(`${GetUrlRoot()}/api/Auth/isAuth`, "GET");
  if (!data) {
    console.error("Data is null");
    throw Error(`Data is null`);
  }
  return data.data;
}
