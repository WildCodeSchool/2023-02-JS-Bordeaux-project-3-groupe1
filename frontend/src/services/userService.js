import axios from "axios";

export const fetcher = async (url) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_API}/${url}`);
    return response.data;
  } catch (error) {
    throw new Error("Error while fetching data");
  }
};

export const sender = async (url, valuesUser) => {
  try {
    const formData = new FormData();
    formData.append("lastname", valuesUser.lastname);
    formData.append("firstname", valuesUser.firstname);
    formData.append("email", valuesUser.email);
    formData.append("city", valuesUser.city);
    formData.append("postalCode", valuesUser.postalCode);
    formData.append("dateOfBirth", valuesUser.dateOfBirth);
    formData.append("gender", valuesUser.gender);
    formData.append("picture", valuesUser.picture);

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API}/${url}`,
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while sending the data");
  }
};
