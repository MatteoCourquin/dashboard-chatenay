import { useLocation } from 'react-router-dom';
import { getEmploye } from '../../services/employes';
import Graph from '../components/Graph';
import GraphCircle from '../components/GraphCircle';

const Details = () => {
  const location = useLocation();
  const employeId = location.pathname.replace('/', '');
  const employe = getEmploye(employeId);
  const questions = employe.questions;

  const dataCircle = [
    { name: 'Travail', value: 2400 },
    { name: 'Personnel', value: 4167 },
    { name: 'Physique', value: 1200 },
    { name: 'Psycologique', value: 3257 },
  ];

  return (
    <>
      <div className='pb-14'>
        <h1 className='capitalize font-bold text-3xl'>{employe.name}</h1>
        <p className='text-sm w-3/4 opacity-70'>
          Ici, vous pourrez observer l'évolution psychologique et le bien être
          au sein de l'entreprise de {employe.name}. Nous vous proposons un
          graphique qui vous permettra de visualiser les données de manière plus
          claire.
        </p>
      </div>
      <div>
        <h2 className='text-xl font-bold'>Taux d'usure génral</h2>
        <GraphCircle data={dataCircle} />
      </div>
      <div>
        <h2 className='text-xl font-bold'>Par question</h2>
        {Object.keys(questions).map((questionKey) => {
          const data = questions[questionKey].scoring;
          const name = questions[questionKey].name;
          return (
            <div className='pb-8' key={questionKey}>
              <h3 className='font-bold'>{name}</h3>
              <Graph key={questionKey} data={data} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Details;
