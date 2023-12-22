import React from 'react';

const Rows = (props) =>{

    let data = props.data;
    
    data.sort((a,b)=>{
      return (a.id - b.id)
    })

    return(
        <>
        {data.map((item) => (
            <tr key={item.id}>
              <td onBlur={(e) => props.onBlur(e,{...item, firstName: e.target.innerText})} contentEditable="true" spellCheck="false" autoComplete="off" className="fName-field-table py-2 px-4 border-b text-center">{item.firstName}</td>
              <td onBlur={(e) => props.onBlur(e,{...item, lastName: e.target.innerText})} contentEditable="true" spellCheck="false" autoComplete="off" className="lName-field-table py-2 px-4 border-b text-center">{item.lastName}</td>
              <td onBlur={(e) => props.onBlur(e,{...item, participation: e.target.innerText})} contentEditable="true" spellCheck="false" autoComplete="off" className="participation-field-table py-2 px-4 border-b text-center">{item.participation}</td>
              <td className="percentage-field-table py-2 px-4 border-b text-center">{item.percentage.toFixed(1)+"%"}</td>
            </tr>
          ))}
        </>
    );
}

export default Rows;