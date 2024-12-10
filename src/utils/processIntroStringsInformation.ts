import removeBadSigns from "./removeBadSigns";

export default function processStringsInformation(text:string):string{
    const maxLength:number = 135; 
    const clearText:string = removeBadSigns(text)
    const difference:number = clearText.length % 10;
    if (clearText.length > (maxLength + difference)) {
        return clearText.slice(0, maxLength + difference) + '...';
    } else {
        return clearText;
    }
} 
