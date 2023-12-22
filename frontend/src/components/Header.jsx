import React, { useState } from 'react';
import Input from "./Input"

const Header = ({value, onSubmit, onChange}) => {
  console.log({value})
  return (
    <header className="bg-blue-400 py-10">
      <form onSubmit={onSubmit} className="flex flex-wrap justify-center container space-x-4 gap-y-4 mx-auto">
        <Input name="firstName" placeholder="First Name" value={value.firstName} onChange={onChange} />
        <Input name="lastName" placeholder="Last Name" value={value.lastName} onChange={onChange} />
        <Input name="participation" placeholder="Participation" value={value.participation} onChange={onChange} />
        <button id="send-button" type="submit" className="bg-blue-400 text-white px-10 py-2 border-white border">
          Send
        </button>
      </form>
    </header>
  );
};

export default Header;