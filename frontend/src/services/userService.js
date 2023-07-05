import axios from "axios";

export const fetcher = async (url, userId) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API}/${url}/${userId}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while fetching data");
  }
};

export const sender = async (url, valuesUser) => {
  const id = 1;
  try {
    const formData = new FormData();
    formData.append("lastname", valuesUser.lastname);
    formData.append("firstname", valuesUser.firstname);
    formData.append("email", valuesUser.email);
    formData.append("city", valuesUser.city);
    formData.append("location", valuesUser.location);
    formData.append("birthdayDate", valuesUser.birthdayDate);
    formData.append("gender", valuesUser.gender);
    formData.append("file", valuesUser.picture);
    formData.append("newFilename", valuesUser.pictureUrl);

    const response = await axios.put(
      `${import.meta.env.VITE_BASE_API}/${url}/${id}`,
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while sending the data");
  }
};
