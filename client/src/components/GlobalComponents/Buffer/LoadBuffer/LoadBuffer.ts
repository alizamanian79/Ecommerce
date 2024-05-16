const handleConvertBase64 = (text: any, index?: number): string => {
    return `${text[index==undefined || null ? 0:index]}`;
};

export default handleConvertBase64;