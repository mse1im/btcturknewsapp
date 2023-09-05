const formatter = (date:string) => {
    return new Date(date).toLocaleTimeString(window.navigator.language,{
        hour: "2-digit",
        minute: "2-digit",
    });
}
export {formatter};