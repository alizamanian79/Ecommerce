import React, { useState } from 'react';

const ImageToBase64Converter: React.FC = () => {
  const [base64Image, setBase64Image] = useState<string>('');

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setBase64Image(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      {base64Image && <img src={base64Image} alt="Uploaded" />}
    </div>
  );
};

export default ImageToBase64Converter;