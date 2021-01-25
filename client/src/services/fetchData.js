import axios from "axios";

let tokenSource;
export const fetchData = async (keyword) => {
  try {
    console.log("keyword");
    if (typeof tokenSource !== typeof undefined) {
      tokenSource.cancel("Request canceled due to new request.");
    }

    // save the new request for cancellation
    tokenSource = axios.CancelToken.source();

    const { data } = await axios.get(
      `http://localhost:8080/country/${keyword}`,
      {
        cancelToken: tokenSource.token,
      }
    );

    console.log("data", data)

    return { result: data } || [];
  } catch (err) {
    if (axios.isCancel(err)) return { cancelPrevQuery: true };
    return [err];
  }
};
