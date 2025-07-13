import { useState } from "react";


const useMovieCard = () => {
      const [isHover, setIsHover] = useState(false);

    
    
    return {
        setIsHover,
        isHover
    }
}


export default  useMovieCard 