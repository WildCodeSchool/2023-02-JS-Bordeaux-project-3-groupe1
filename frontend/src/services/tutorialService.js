import axios from "axios";

export const sender = async (url, forms) => {
  try {
    const formData = new FormData();
    formData.append("question", forms.question);
    formData.append("firstProposal", forms.optionOne);
    formData.append("secondProposal", forms.optionTwo);
    formData.append("response", forms.answer);
    formData.append("name", forms.nameTutorial);
    formData.append("formationId", forms.idFormation);
    formData.append("valuesTag", forms.valuesTag);
    formData.append("level", forms.levelTutorial);
    formData.append("objectif", forms.objectifTutorial);
    formData.append("explication", forms.explicationTutorial);
    formData.append("urlVideo", forms.videoUrl);
    formData.append("file", forms.selectedFile);

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API}/${url}`,
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while sending the data");
  }
};

export const fetcherTags = async (url, tutorialId) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API}/${url}/${tutorialId}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while fetching data");
  }
};
