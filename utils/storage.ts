const setStorage = (name:string,filterData:string[]) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(name,JSON.stringify(filterData))
    }
}
const useStorage = (name:string):string[] | null => {
    if (typeof window !== "undefined") {
        if(localStorage.getItem(name) != null){
            return JSON.parse(localStorage.getItem(name) ?? '');
        }
    }
    return null;
}
export {useStorage,setStorage};