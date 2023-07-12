export function RewardUser(tutorials) {
  console.info(tutorials);
  let tutorialsFilteredLevelCombined = [];
  for (let i = 0; i < tutorials.length; i++) {
    if (
      tutorialsFilteredLevelCombined.find(
        (element) => element.name === tutorials[i]
      )
    ) {
    } else {
      let idFormation = tutorials[i].formationId;
      let arrayTutorialByIdFormation = tutorials.filter(
        (element) => element.formationId === idFormation
      );
      for (let j = 0; j < arrayTutorialByIdFormation.length; j++) {
        let correspondance = arrayTutorialByIdFormation.find(
          (element) => element.name === arrayTutorialByIdFormation[j].name
        );
        let tutorialCombined = {
          stepOneLevelOne: arrayTutorialByIdFormation[j].stepOne,
          stepOneLevelTwo: correspondance.stepOne,
          stepTwoLevelOne: arrayTutorialByIdFormation[j].stepTwo,
          stepOneLevelTwo: correspondance.stepTwo,
          stepThirdLevelOne: arrayTutorialByIdFormation[j].stepThree,
          stepOneLevelTwo: correspondance.stepThree,
        };
      }

      tutorialsFilteredLevelCombined.push({
        formationId: tutorials[0].formationId,
        iconURL: tutorials[0].iconURL,
      });
    }
  }
}
