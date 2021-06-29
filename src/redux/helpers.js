export const propsSum = (collection, prop) =>
    collection.reduce((sum, item) => sum + item[prop], 0);
