import axios from "axios";

export const fetcherAllUsers = async (url) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_API}/${url}`);
    return response.data;
  } catch (error) {
    throw new Error("Error while fetching data");
  }
};

export const fetcherUSerById = async (url, userId) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API}/${url}/${userId}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while fetching data");
  }
};

export const fetcherUSerByIdTutorials = async (url, id, userId) => {
  const formationId = parseInt(id, 10);
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API}/${url}/${formationId}/${userId}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while fetching data");
  }
};

export const sender = async (url, userId, valuesUser) => {
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
      `${import.meta.env.VITE_BASE_API}/${url}/${userId}`,
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while sending the data");
  }
};

export const senderLevelUser = async (url, userId, valuesUser) => {
  const form = {
    level: parseInt(valuesUser.level, 10),
  };
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_API}/${url}/${userId}`,
      form
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while sending the data");
  }
};

export const senderRoleUser = async (url, userId, valuesUser) => {
  const form = {
    role: parseInt(valuesUser.roleUser, 10),
  };

  console.log(form);
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BASE_API}/${url}/${userId}`,
      form
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while sending the data");
  }
};

export const senderStepsByUser = async (
  url,
  id,
  stepOne,
  stepTwo,
  stepThree,
  tutoId
) => {
  const userId = parseInt(id, 10);
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API}/${url}/${userId}`,
      stepOne,
      stepTwo,
      stepThree,
      tutoId
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while sending the data");
  }
};
