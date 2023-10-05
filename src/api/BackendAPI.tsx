const getResponse = async (url: string, method: string) => {
  const token = localStorage.getItem("token");
  const response = await fetch(url, {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`,
    },
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

export const GetLoginLink = async () => {
  const data = await getResponse("https://ztlme-6a589cc5f144.herokuapp.com/auth/startAuth", "GET");
  // const data = await getResponse("http://localhost:3005/auth/startAuth", "GET");
  if (!data) {
    console.error("Data is null");
    throw Error(`Data is null`);
  }
  return data.authenticationUrl;
};
