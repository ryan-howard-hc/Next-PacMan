// import React from 'react';
// import { useClient } from 'vitedge/client';

// const PacMove = ({ boardData, initialPosition }) => {
//   useClient();

//   const [pacManPosition, setPacManPosition] = React.useState(initialPosition);

//   React.useEffect(() => {
//     const handleKeyPress = (event) => {
//       movePacMan(event.key);
//     };

//     window.addEventListener('keydown', handleKeyPress);

//     return () => {
//       window.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [boardData, initialPosition]);

//   const movePacMan = (direction) => {
//     const { x: currentX, y: currentY } = pacManPosition;
//     let newX = currentX;
//     let newY = currentY;

//     switch (direction) {
//       case 'ArrowUp':
//         newY = currentY - 1;
//         break;
//       case 'ArrowDown':
//         newY = currentY + 1;
//         break;
//       case 'ArrowLeft':
//         newX = currentX - 1;
//         break;
//       case 'ArrowRight':
//         newX = currentX + 1;
//         break;
//       default:
//         return;
//     }

//     if (boardData[newY] && boardData[newY][newX] !== 'X') {
//       setPacManPosition({ x: newX, y: newY });
//     }
//   };

//   return null; 
// };

// export default PacMove;
