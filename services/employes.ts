import { faker } from '@faker-js/faker';

const data = Array(100)
  .fill('')
  .map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    questions: {
      question1: {
        name: 'À quel point ressentez-vous de la fatigue émotionnelle liée au travail ? (1 étant pas du tout, 5 étant très)',
        scoring: [
          {
            name: 'firstQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'secondQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'thirdQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fourthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fifthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
        ],
      },
      question2: {
        name: 'Êtes-vous satisfait de la reconnaissance que vous recevez pour votre travail ? (1 étant pas du tout satisfait, 5 étant très satisfait)',
        scoring: [
          {
            name: 'firstQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'secondQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'thirdQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fourthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fifthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
        ],
      },
      question3: {
        name: 'À quel point les tâches professionnelles actuelles vous passionnent-elles ? (1 étant pas du tout passionnant, 5 étant très passionnant)',
        scoring: [
          {
            name: 'firstQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'secondQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'thirdQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fourthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fifthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
        ],
      },
      question4: {
        name: 'Vous sentez-vous surexploité(e) dans votre emploi actuel ? (1 étant pas du tout, 5 étant très)',
        scoring: [
          {
            name: 'firstQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'secondQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'thirdQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fourthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fifthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
        ],
      },
      question5: {
        name: 'À quel point êtes-vous motivé(e) à aller travailler chaque jour ? (1 étant pas du tout motivé(e), 5 étant très motivé(e))',
        scoring: [
          {
            name: 'firstQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'secondQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'thirdQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fourthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fifthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
        ],
      },
      question6: {
        name: 'Vous sentez-vous compétent(e) pour accomplir les tâches qui vous sont confiées ? (1 étant pas du tout compétent(e), 5 étant très compétent(e))',
        scoring: [
          {
            name: 'firstQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'secondQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'thirdQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fourthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fifthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
        ],
      },
      question7: {
        name: 'Ressentez-vous un équilibre entre votre vie professionnelle et personnelle ? (1 étant pas du tout équilibré, 5 étant parfaitement équilibré)',
        scoring: [
          {
            name: 'firstQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'secondQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'thirdQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fourthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fifthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
        ],
      },
      question8: {
        name: 'Êtes-vous satisfait(e) de votre niveau de rémunération ? (1 étant pas du tout satisfait(e), 5 étant très satisfait(e))',
        scoring: [
          {
            name: 'firstQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'secondQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'thirdQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fourthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fifthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
        ],
      },
      question9: {
        name: "À quel point les perspectives d'avancement dans votre emploi actuel vous semblent-elles attrayantes ? (1 étant pas du tout attrayant, 5 étant très attrayant)",
        scoring: [
          {
            name: 'firstQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'secondQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'thirdQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fourthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fifthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
        ],
      },
      question10: {
        name: 'Vous sentez-vous épuisé(e) physiquement par votre travail ? (1 étant pas du tout, 5 étant très)',
        scoring: [
          {
            name: 'firstQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'secondQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'thirdQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fourthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
          {
            name: 'fifthQuestion',
            score: faker.number.int({ min: 1, max: 5 }),
          },
        ],
      },
    },
  }));

export const getAllEmployes = () => {
  return data;
};

export const getEmploye = (id: string) => {
  return data.find((employe) => employe.id === id);
};
