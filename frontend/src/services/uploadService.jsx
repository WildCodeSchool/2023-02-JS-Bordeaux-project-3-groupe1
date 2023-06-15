import axios from "axios";

export const getUploads = async () => {
  try {
    const response = await axios.get("http://localhost:5000/create");
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des uploads");
  }
};

export const postUpload = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post("http://localhost:5000/create", formData);
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de l'envoi de l'upload");
  }
};
