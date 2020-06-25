export function anchorize(text:string): string {
  const replacer = (mtch: string): string => {
    console.log('match: '+ mtch);
    return ` <a href="${mtch.replace(/\s/g, '')}">${mtch.replace(/\s/g, '')}</a>`
  }
  return text.replace(/\s([\w|:|\/|\.])+/g, replacer)
}

// console.log(anchorize('hello FTP://world.com !')); 
// 'hello <a href="FTP://world.com">FTP://world.com</a> !' 
console.log(anchorize('hello http://world.com !')); 
// 'hello <a href="http://world.com">http://world.com</a> !' 

// console.log(anchorize('hello file://C:/world.txt !')); 
