import React from 'react';
import Rows from './Rows';

const Table = (props) => {
  // Dados de exemplo
  const data = props.data;

  return (
    <div className="flex justify-center items-center mt-10">
      <table className="bg-white border border-gray-200 text-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b"></th>
            <th className="py-2 px-4 border-b text-center">First Name</th>
            <th className="py-2 px-4 border-b text-center">Last Name</th>            
            <th className="py-2 px-4 border-b text-center">Participation</th>
            <th className="py-2 px-4 border-b text-center">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.length? <Rows data={data}/> : null}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
