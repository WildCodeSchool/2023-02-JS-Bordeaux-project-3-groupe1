import axios from "axios";

export const sender = async (url, id, forms) => {
  console.log(forms);
  console.log(id);
  try {
    const formData = new FormData();
    formData.append("question", forms.question);
    formData.append("firstProposal", forms.optionOne);
    formData.append("secondProposal", forms.optionTwo);
    formData.append("response", forms.answer);
    formData.append("name", forms.nameTutorial);
    formData.append("formationId", forms.idFormation);

    if (forms.valuesTag) {
      formData.append("valuesTag", forms.valuesTag);
    } else if (forms.updatedTags) {
      formData.append("updatedTags", forms.updatedTags);
    }

    formData.append("level", forms.levelTutorial);
    formData.append("objectif", forms.objectifTutorial);
    formData.append("explication", forms.explicationTutorial);
    formData.append("urlVideo", forms.videoUrl);
    formData.append("file", forms.selectedFile);

    if (id) {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API}/${url}/${id}`,
        formData
      );
      return response.data;
    }

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API}/${url}`,
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while sending the data");
  }
};

export const fetcherTags = async (url, id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API}/${url}/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while fetching data");
  }
};

export const fetcherTutorialById = async (url, id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API}/${url}/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while fetching data");
  }
};
