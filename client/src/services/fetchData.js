import axios from "axios";

let tokenSource;
export const fetchData = async (keyword) => {
  try {
    if (typeof tokenSource !== typeof undefined) {
      tokenSource.cancel("Request canceled due to new request.");
    }

    // save the new request for cancellation
    tokenSource = axios.CancelToken.source();
    const token = localStorage.getItem("token");

    const { data } = await axios.get(
      `http://localhost:8080/country/${keyword}`,
      { headers: { Authorization: `Bearer ${token}` } },
      {
        cancelToken: tokenSource.token,
      }
    );

    console.log("data", data);

    return { result: data } || [];
  } catch (err) {
    if (axios.isCancel(err)) return { cancelPrevQuery: true };
    return [err];
  }
};
