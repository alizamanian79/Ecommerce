Imports

import ConvertBuffer from "@/components/GlobalComponents/Buffer/ConvertBuffer/ConvertBuffer"


In Parent component:

 const [images, setimages] = useState<string>('');
  const handleCallbackImages = (data: string) => {
    setimages(data);
  };

return(
       <ConvertBuffer imagesNumber={5}  handleCallback={handleCallbackImages} />

)