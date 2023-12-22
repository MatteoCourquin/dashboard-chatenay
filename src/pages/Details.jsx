import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { getEmployes } from '../../services/employes';
import Graph from '../components/Graph';

export default function () {
  const location = useLocation();
  const [employe, setEmploye] = useState();
  const [formatedData, setFormatedData] = useState([]);
  const employesQuery = useQuery({
    queryFn: getEmployes,
    onSuccess: (data) => {
      transformAndSort(data);
      setEmploye(
        formatedData.find(
          (employe) =>
            employe.name.toLowerCase() ===
            location.pathname
              .replace('/employes/', '')
              .split('-')[0]
              .toLowerCase()
        )
      );
    },
  });

  function transformAndSort(inputJson) {
    inputJson.sort((a, b) => {
      if (a.name !== b.name) {
        return a.name.localeCompare(b.name);
      } else if (a.surname !== b.surname) {
        return a.surname.localeCompare(b.surname);
      } else {
        return new Date(a.created_at) - new Date(b.created_at);
      }
    });

    const result = {};

    inputJson.forEach((entry) => {
      const key = `${entry.name}_${entry.surname}`;

      if (!result[key]) {
        result[key] = {
          name: entry.name,
          surname: entry.surname,
        };
      }

      for (let i = 1; i <= 22; i++) {
        const questionKey = `question${i}`;
        const response = entry[questionKey];

        if (response !== null && response !== undefined) {
          if (!result[key][questionKey]) {
            result[key][questionKey] = [];
          }

          result[key][questionKey].push({
            created_date: entry.created_at,
            response: response.toString(),
          });
        }
      }
    });

    setFormatedData(Object.values(result));
  }

  useEffect(() => {
    console.log(employe);
  }, [employe]);

  return (
    <>
      <h1 className='capitalize'>
        {location.pathname.replace('/employes/', '').replaceAll('-', ' ')}
      </h1>
      {employesQuery.isFetched && employe && (
        <>
          <p>question1</p>
          <Graph data={employe?.question1} />
          <p>question2</p>
          <Graph data={employe?.question2} />
          <p>question3</p>
          <Graph data={employe?.question3} />
          <p>question4</p>
          <Graph data={employe?.question4} />
          <p>question5</p>
          <Graph data={employe?.question5} />
          <p>question6</p>
          <Graph data={employe?.question6} />
          <p>question7</p>
          <Graph data={employe?.question7} />
          <p>question8</p>
          <Graph data={employe?.question8} />
          <p>question9</p>
          <Graph data={employe?.question9} />
          <p>question10</p>
          <Graph data={employe?.question10} />
          <p>question11</p>
          <Graph data={employe?.question11} />
          <p>question12</p>
          <Graph data={employe?.question12} />
          <p>question13</p>
          <Graph data={employe?.question13} />
          <p>question14</p>
          <Graph data={employe?.question14} />
          <p>question15</p>
          <Graph data={employe?.question15} />
          <p>question16</p>
          <Graph data={employe?.question16} />
          <p>question17</p>
          <Graph data={employe?.question17} />
          <p>question18</p>
          <Graph data={employe?.question18} />
          <p>question19</p>
          <Graph data={employe?.question19} />
          <p>question20</p>
          <Graph data={employe?.question20} />
        </>
      )}
    </>
  );
}
