const handleConvertBase64 = (text: any, index?: number): string => {
    return `data:image/jpeg;base64,${text[index==undefined || null ? 0:index]}`;
};

export default handleConvertBase64;