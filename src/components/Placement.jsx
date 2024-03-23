import React from 'react';

const Placement = () => {
  const candidates = [
    { name: 'Milan', joiningFrom: '15-01-2021', imoNo: 'Shinyang shipping sdn BHD', salary: '40000', photo: 'url_to_photo' },
    { name: 'Saurabh Tripathi', joiningFrom: '05-01-2021', imoNo: 'Danum shipping sdn bhd', salary: '42000', photo: 'url_to_photo' },
    { name: 'Amit Kumar', joiningFrom: '10-01-2021', imoNo: 'FLEET', salary: '45000', photo: 'url_to_photo' },
    { name: 'Satyam', joiningFrom: '10-01-2021', imoNo: 'HUTA MARINE', salary: '45000', photo: 'url_to_photo' },
    { name: 'Moh. Urvesh', joiningFrom: '10-01-2021', imoNo: 'Carnival cruise', salary: '45000', photo: 'url_to_photo' },
    { name: 'Shakti Singh', joiningFrom: '10-01-2021', imoNo: 'Geniki lines', salary: '45000', photo: 'url_to_photo' },
    // Add more candidate data here...
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white ">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 text-left">Candidate Name</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">Joining From</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">IMO No.</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">Salary</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left">Photo</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b border-gray-200">{candidate.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{candidate.joiningFrom}</td>
              <td className="py-2 px-4 border-b border-gray-200">{candidate.imoNo}</td>
              <td className="py-2 px-4 border-b border-gray-200">{candidate.salary}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <img src={candidate.photo} alt={candidate.name} className="w-12 h-12 rounded-full" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Placement;
