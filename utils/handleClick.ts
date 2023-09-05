const handleClick = (author:string) => {
    window.location.href = `${window.location.origin}/category/detail?author=${author.replaceAll(" ", "-")}`;
}

export default handleClick;