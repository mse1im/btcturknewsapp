const setStorage = (name:string,filterData:string[]) => {
    localStorage.setItem(name,JSON.stringify(filterData))
}
const useStorage = (name:string):string[] | null => {
    if(localStorage.getItem(name) != null){
        return JSON.parse(localStorage.getItem(name) ?? '');
    }
    return null;
}
export {useStorage,setStorage};