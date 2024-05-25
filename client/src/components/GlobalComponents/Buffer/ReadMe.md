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




Load

      <Image
        className={`w-100 h-[15rem] rounded-lg object-cover`}
        src={data.pImages[1]!==null? `data:image/png;base64,${data.pImages[1]}`:`data:image/png;base64,${defaultProductImage}`}
       
        width={0}
        height={0}
        alt="image"
      />