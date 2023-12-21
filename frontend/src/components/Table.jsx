import React from 'react';
import Rows from './Rows';

const Table = (props) => {

  const data = props.data;
  const colors = [
    'blue',
    'teal',
    'yellow',
    'red',
    'purple',
  ];

  if (data.length){
    return (
      <div className="flex justify-center my-10">
        <table className="bg-white border border-gray-200 text-lg">
          <thead>
            <tr>
              <th className="py-2 px-4  border-b text-center">First Name</th>
              <th className="py-2 px-4 border-b text-center">Last Name</th>            
              <th className="py-2 px-4 border-b text-center">Participation</th>
              <th className="py-2 px-4 border-b text-center">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {data.length ? <Rows data={data} onBlur={props.onBlur} /> : null}
          </tbody>
        </table>
        <table className='bg-white border border-white text-lg'>
          <thead className='invisible'>
            <tr>
              <th className='py-2 px-2 text-center '>Dlt</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index)=>{
              return <tr key={item.id}><td  className="py-2 px-2 text-center">
                  <button onClick={(e)=>{props.onClick(e, item.id)}} className={`w-9 h-9 text-black-400 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-${colors[(index%5)]}-100`}>x</button>
                </td></tr>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
  else{
    return(
      <div></div>
    )
  }


};

export default Table;