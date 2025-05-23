import React from 'react';
import Card from '../../components/common/Card';

const CareersPage: React.FC = () => {
  const careers = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Janakpur, Nepal',
      type: 'Full-time'
    },
    {
      title: 'Travel Consultant',
      department: 'Operations',
      location: 'Kathmandu, Nepal',
      type: 'Full-time'
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Janakpur, Nepal',
      type: 'Full-time'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-primary-light dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Careers at GoJanakpurTours</h1>
          <p className="text-white/90 text-lg">Join our team and help people explore the world</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {career.title}
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>Department: {career.department}</p>
                <p>Location: {career.location}</p>
                <p>Type: {career.type}</p>
              </div>
              <button className="mt-4 w-full bg-primary-light dark:bg-primary-dark text-white py-2 rounded-md hover:opacity-90 transition-opacity">
                Apply Now
              </button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;