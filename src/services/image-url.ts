
const getUrlWithInsertedText = (url: string, target: string, insertedText: string) => {
    const index = url.indexOf(target) + target.length;
    console.log(url, target, insertedText, index);
    return url.slice(0, index) + insertedText + url.slice(index);
}

export default getUrlWithInsertedText;