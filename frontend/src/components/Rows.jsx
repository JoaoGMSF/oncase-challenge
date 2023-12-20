import React from 'react';

const Rows = (props) =>{
    return(
        <>
        {props.data.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.id}</td>
              <td onBlur="" contentEditable="true" spellCheck="false" autoComplete="off" className="py-2 px-4 border-b text-center">{item.firstName}</td>
              <td onBlur="" contentEditable="true" spellCheck="false" autoComplete="off" className="py-2 px-4 border-b text-center">{item.lastName}</td>
              <td onBlur="" contentEditable="true" spellCheck="false" autoComplete="off" className="py-2 px-4 border-b text-center">{item.participation}</td>
              <td className="py-2 px-4 border-b text-center">{item.percentage.toFixed(1)+"%"}</td>
            </tr>
          ))}
        </>
    );
}

export default Rows;