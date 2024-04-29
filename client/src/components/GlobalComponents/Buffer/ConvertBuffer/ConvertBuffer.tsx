import React, { useState } from "react";
interface ChildProps {
  imagesNumber: number;
  handleCallback: any;
}

const ImageToBase64Converter: React.FC<ChildProps> = ({
  handleCallback,
  imagesNumber,
}) => {
  const [base64Buffers, setBase64Buffers] = useState<string[]>([]);

  handleCallback(base64Buffers);

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.target.files == null) {
      return;
    }
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;

        if (base64Buffers.includes(base64String)) {
          alert("This image is already added.");
          return;
        }

        var base64WithoutPrefix = base64String.replace(
          /^data:image\/(jpeg|jpg|png|avif|webp);base64,/,
          ""
        );

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
    alert("Base64 copied to clipboard!");
  };

  let imagesNumberLoc = Array.from(
    { length: imagesNumber },
    (_, index) => index + 1
  );

  const handleGenerateInputs = () =>
    imagesNumberLoc.map((item: number) => {
      return (
        <input
          key={item ? item : null}
          type="file"
          onChange={(e) => handleFileInputChange(e, item)}
        />
      );
    });

  return (
    <div>
      {handleGenerateInputs()}
{/* 
      <div>
        {base64Buffers.map((buffer, index) => (
          <>
            <pre
              key={index}
              onClick={() => copyToClipboard(buffer)}
              style={{ cursor: "pointer" }}
            >
              {buffer}
            </pre>
            <br />
          </>
        ))}
      </div>

       */}
    </div>
  );
};

export default ImageToBase64Converter;
