import { Link } from 'react-router-dom';
import { getAllEmployes } from '../../services/employes';

const AllEmployes = () => {
  const AllEmployes = getAllEmployes();

  return (
    <div>
      <h1 className='capitalize font-bold pb-4 text-3xl'>Liste des agents</h1>
      {AllEmployes.map((employe, index) => (
        <Link
          className='flex justify-between w-full py-2 bg-gray-50 rounded-lg mb-1 px-3 hover:bg-gray-100'
          to={`/${employe.id}`}
          key={employe.id + index}
        >
          <p>{employe.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default AllEmployes;
