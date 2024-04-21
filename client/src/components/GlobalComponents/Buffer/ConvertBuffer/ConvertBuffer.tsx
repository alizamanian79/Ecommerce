import React, { useState } from 'react';

const ImageToBase64Converter: React.FC = () => {
  const [base64Buffers, setBase64Buffers] = useState<string[]>([]);

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (event.target.files == null) {
      return;
    }
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        
        if (base64Buffers.includes(base64String)) {
          alert('This image is already added.');
          return;
        }

        var base64WithoutPrefix = base64String.replace(/^data:image\/(jpeg|jpg|png|avif|webp);base64,/, '');

        setBase64Buffers((prevBuffers) => {
          const newBuffers = [...prevBuffers];
          newBuffers[index] = base64WithoutPrefix;
          return newBuffers;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const copyToClipboard = (base64String: string) => {
    navigator.clipboard.writeText(base64String);
    alert('Base64 copied to clipboard!');
  };

  return (
    <div>
      <input type="file" onChange={(e) => handleFileInputChange(e, 0)} />
      <input type="file" onChange={(e) => handleFileInputChange(e, 1)} />
      <input type="file" onChange={(e) => handleFileInputChange(e, 2)} />

      <div>
        {base64Buffers.map((buffer, index) => (
          <pre key={index} onClick={() => copyToClipboard(buffer)} style={{ cursor: 'pointer' }}>
            {buffer}
          </pre>
        ))}
      </div>
    </div>
  );
};

export default ImageToBase64Converter;