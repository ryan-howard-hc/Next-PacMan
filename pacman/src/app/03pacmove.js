import { useEffect } from 'react';

const PacMove = ({ movePacMan }) => {
    useEffect(() => {
        const handleKeyPress = (event) => {
          movePacMan(event.key);
        };
    
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, [movePacMan]);
    
      return null; // This component doesn't render anything
    };
export default PacMove;
