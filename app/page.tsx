'use client';

import { useState } from 'react';
import NCQForm from './ncqForm';
import EnrollmentForm from './enrollmentForm';

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState('');

  const handleNCQClick = () => {
    setSelectedComponent('NCQ');
  };

  const handleEnrollmentClick = () => {
    setSelectedComponent('Enrollment');
  };

  return (
    <div>
      <div className="ml-[40rem]">
        <button
          type="button"
          onClick={handleNCQClick}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          NCQ Form
        </button>
        <button
          type="button"
          onClick={handleEnrollmentClick}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-3"
        >
          Enrollment Form
        </button>
      </div>

      {selectedComponent === 'NCQ' && <NCQForm />}
      {selectedComponent === 'Enrollment' && <EnrollmentForm />}
    </div>
  );
}
