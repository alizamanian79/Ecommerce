import { useEffect } from 'react';
import LocalStorage from '@/components/GlobalComponents/LocalStorage/LocalStorage';


const YourComponent = () => {
  useEffect(() => {



    // Save data to localStorage
    LocalStorage.save('key', [
      {name:"salam"}
    ]);
    LocalStorage.load('key');
    // Get data from localStorage
   
    
  }, []);

  return (
    <div>
        Hi
      {/* Your component JSX */}
    </div>
  );
};

export default YourComponent;