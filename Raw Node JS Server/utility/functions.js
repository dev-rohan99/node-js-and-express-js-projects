export const findLastId = (obj) => {
    return (Number(obj[obj.length - 1].id) + 1);
}