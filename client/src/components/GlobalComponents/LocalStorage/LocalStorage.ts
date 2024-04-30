

const LocalStorage = {

    save:(key: string, data: any)=>{
        localStorage.setItem(key, JSON.stringify(data));
    },

    load:(key: string) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
      },

}

export default LocalStorage;
