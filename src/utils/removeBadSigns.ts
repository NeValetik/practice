export default function removeBadSigns(text:string):string{
  return text.replaceAll("&#34;",'"');
} 
