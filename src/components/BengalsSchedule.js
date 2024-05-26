import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BengalsSchedule.css';

const BengalsSchedule = () => {
  const imageUrl = "https://static.clubs.nfl.com/image/upload/bengals/mu5kyqomewfttha0b75s";

  return (
    <div className="schedule-container">
      <Container className="text-center">
        <img src={imageUrl} alt="Cincinnati Bengals 2024 Schedule" className="schedule-image" />
      </Container>
    </div>
  );
};

export default BengalsSchedule;










// import React from 'react';
// import { Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './BengalsSchedule.css';

// const BengalsSchedule = () => {
//   const schedule = [
//     { week: 1, date: 'Sept 8', opponent: 'Team A', location: 'Home' },
//     { week: 2, date: 'Sept 15', opponent: 'Team B', location: 'Away' },
//     { week: 3, date: 'Sept 22', opponent: 'Team C', location: 'Home' },
//     // Add more games as needed
//   ];

//   return (
//     <div className="schedule-container">
//       <Container className="text-center">
//         <h1 className="text-white">Cincinnati Bengals 2024 Schedule</h1>
//         <table className="table table-dark table-striped">
//           <thead>
//             <tr>
//               <th>Week</th>
//               <th>Date</th>
//               <th>Opponent</th>
//               <th>Location</th>
//             </tr>
//           </thead>
//           <tbody>
//             {schedule.map((game, index) => (
//               <tr key={index}>
//                 <td>{game.week}</td>
//                 <td>{game.date}</td>
//                 <td>{game.opponent}</td>
//                 <td>{game.location}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Container>
//     </div>
//   );
// };

// export default BengalsSchedule;
