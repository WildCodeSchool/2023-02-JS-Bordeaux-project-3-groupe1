/* eslint-disable import/prefer-default-export */
import axios from "axios";

export const fetcher = async (url) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_API}/${url}`);
    return response.data;
  } catch (error) {
    throw new Error("Error while fetching data");
  }
};

export const sender = async (url, id, stepOne, stepTwo, setpThree, tutoId) => {
  const formationId = parseInt(id, 10);
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API}/${url}/${formationId}`,
      stepOne,
      stepTwo,
      setpThree,
      tutoId
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while sending the data");
  }
};
