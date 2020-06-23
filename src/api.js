import axios from "axios";

const API_BASE_URL = "https://assignment-concerto.herokuapp.com/assignment/";
export const sendGetRequest = async (relativeUrl) => {
  const url = `${API_BASE_URL}${relativeUrl}`;
  const response = await axios({
    method: "GET",
    url,
  });
  return response;
};

export const sendPostRequest = async (relativeUrl, data) => {
  const url = `${API_BASE_URL}${relativeUrl}`;
  const response = await axios({
    method: "POST",
    url,
    data: data,
  });
  return response;
};
