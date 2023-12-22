import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { getEmployes } from '../../services/employes';
import { formatDate } from '../../services/formatDate';
import { useEffect, useState } from 'react';

export default function AllEmployes() {
  const employesQuery = useQuery({
    queryFn: getEmployes,
    onSuccess: (data) => {
      transformAndSort(data);
    },
  });

  const [formatedData, setFormatedData] = useState([]);

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
    console.log(formatedData);
  }, [formatedData]);
  return (
    <div>
      {employesQuery.isFetched &&
        formatedData.map((employe, index) => (
          <Link
            className='flex justify-between w-full border-b py-2'
            to={'/employes/' + employe.name}
            key={employe.name + index}
          >
            <p>{employe.name}</p>
            <p>{formatDate(employe.created_at)}</p>
          </Link>
        ))}
    </div>
  );
}
