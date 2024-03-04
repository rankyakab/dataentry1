import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/solid';

const AddButton = ({  onClick, buttonText }) => {


    return (
        <button
        className="rounded-1xl text-sm bg-blue text-slate-200 focus:outline-none"
        type="button"
        onClick={onClick}
      >
        <Link  className="flex items-center gap-3 text-slate-100 hover:text-slate-100">
       
          <PlusIcon width={24} height={24} /> {buttonText}
        </Link>
      </button>
    );
    

};


export default AddButton;
