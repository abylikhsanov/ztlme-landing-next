const getResponse = async (url: string, method: string) => {
  const token = localStorage.getItem("token");
  const response = await fetch(url, {
    method: method,
   // headers: {
   //   Authorization: `Bearer ${token}`,
   // },
    credentials: "include",
  });

  if (!response) {
    console.error("No response");
    throw Error("No response")
  }

  const data = await response.json();
  if (!data) {
    console.error("No data in response");
    throw Error("No data in response")
  }

  return data;
};

export function GetUrlRoot() {
  return "https://ztlme-api-05a97b131bda.herokuapp.com";
  //return "https://75a9-84-48-48-163.ngrok-free.app";
}

export async function GetAuthStatus() {
  //const data = await getResponse("https://75a9-84-48-48-163.ngrok-free.app/api/Auth/isAuth", "GET");
  const data = await getResponse(`${GetUrlRoot}/api/Auth/isAuth`, "GET");
  if (!data) {
    console.error("Data is null");
    throw Error(`Data is null`);
  }
  return data.data;
}
