import axios from "axios";

export const sender = async (url, forms) => {
  try {
    console.log("forms", forms);
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
    formData.append("file", forms.selectedFile);
    formData.append("urlVideo", forms.videoUrl);
    /* {
      "question": "test",
      "firstProposal": "test2",
      "secondProposal": "test",
      "response": "test",
      "formation_id": 1,
      "level": 1,
      "name": "test2",
      "urlVideo": "https://www.youtube.com/watch?v=oDZXQr6YZFM",
      "objectif": "Féminin",
      "explication": "bordeaux",
      "pictureExplication": "https://media.licdn.com/dms/image/D4E03AQFWK_Ne8WJLpA/profile-displayphoto-shrink_800_800/0/1665384163240?e=1691625600&v=beta&t=9E3A0EYl7CItDC1539JHhv28WYQhOPNxbUPQzjjwy2I"
    } */

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_API}/${url}`,
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error("Error while sending the data");
  }
};

export const fetcher = async (url) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_API}/${url}`);
    return response.data;
  } catch (error) {
    throw new Error("Error while fetching data");
  }
};
