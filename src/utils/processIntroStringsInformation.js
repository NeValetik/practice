import removeBadSigns from "./removeBadSigns";

export default function processStringsInformation(text){
    const maxLength = 135; 
    const clearText = removeBadSigns(text)
    const difference = clearText.length % 10;
    if (clearText.length > (maxLength + difference)) {
        return clearText.slice(0, maxLength + difference) + '...';
    } else {
        return clearText;
    }
} 
