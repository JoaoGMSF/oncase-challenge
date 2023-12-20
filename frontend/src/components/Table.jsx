import React from 'react';

const Table = () => {
  // Dados de exemplo
  const dados = [
    { id: 1, nome: 'Item 1', preco: 10, },
    { id: 2, nome: 'Item 2', preco: 20, },
    { id: 3, nome: 'Item 3', preco: 30, },
  ];

  return (
    <div className="flex justify-center items-center mt-10">
      <table className="bg-white border border-gray-200 text-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b"></th>
            <th className="py-2 px-4 border-b">First Name</th>
            <th className="py-2 px-4 border-b">Last Name</th>            
            <th className="py-2 px-4 border-b">Participation</th>
            <th className="py-2 px-4 border-b">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.nome}</td>
              <td className="py-2 px-4 border-b">{item.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
