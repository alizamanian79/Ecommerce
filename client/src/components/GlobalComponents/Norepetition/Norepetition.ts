const noRepetition = (array: string[]) => {
    const uniqueItems: string[] = [];
    const repetitionItems: string[] = [];
  
    for (let i = 0; i < array.length; i++) {
      let isUnique = true;
      for (let j = 0; j < uniqueItems.length; j++) {
        if (array[i] === uniqueItems[j]) {
          let isRepetition = false;
          for (let c = 0; c < repetitionItems.length; c++) {
            if (array[i] === repetitionItems[c]) {
              isRepetition = true;
              break;
            }
          }
          if (!isRepetition) {
            repetitionItems.push(array[i]);
          }
          isUnique = false;
          break;
        }
      }
      if (isUnique) {
        uniqueItems.push(array[i]);
      }
    }
  
    const uniqueRepetitionItems = Array.from(new Set(repetitionItems));
  
    return { uniqueItems, repetitionItems };
  };
  
  export default noRepetition;