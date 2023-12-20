import React, { useState } from 'react';
import Input from "./Input"

const Header = (props) => {
  return (
    <header className="bg-blue-400 py-10">
      <form onSubmit={props.onSubmit} className="flex flex-wrap justify-center container space-x-4 gap-y-4 mx-auto">
        <Input name="firstName" placeholder="First Name" value={props.value.firstName} onChange={props.onChange} />
        <Input name="lastName" placeholder="Last Name" value={props.value.lastName} onChange={props.onChange} />
        <Input name="participation" placeholder="Participation" value={props.value.participation} onChange={props.onChange} />
        <button type="submit" className="bg-blue-400 text-white px-10 py-2 border-white border">
          Send
        </button>
      </form>
    </header>
  );
};

export default Header;