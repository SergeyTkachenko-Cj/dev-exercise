
export class G964 {

  public static balanceStatements = (list: string) => {
    const regex = /([A-Z])+\s\d+\s(\d+)?\.\d+\s(B|S)/;

    const arr: Array<string> = list.split(',');
    let bad: number = 0;
    let badStr: string = '';
    let sumBuy: any = 0;
    let sumSell: any = 0;
    
    const arrFilt = arr.filter(i => {
      if (regex.test(i)) {
        /\sB/.test(i) ? sumBuy += +(i.match(/(\d+)?\.\d+/) || [])[0] * +(i.match(/\s\d+/) || []) : 
                        sumSell += +(i.match(/(\d+)?\.\d+/) || [])[0] * +(i.match(/\s\d+/) || []);
        return i.match(regex)
      }
      else {
        const noSpace: string = i.replace(/^\s/, '');
        if (!badStr.length) badStr += ' '+ noSpace + ' ;';
        else { badStr += noSpace + ' ;' }
        bad++;
        return false
      } 
    })

    let badly: string = `; Badly formed ${bad}:${badStr}`;

    arr[0].length ? bad : bad = 0;

    return `Buy: ${Math.round(sumBuy)} Sell: ${Math.round(sumSell)}${bad ? badly : ''}`
  }
}

console.log(G964.balanceStatements("GOOG 300 542.0 B, AAPL 50 145.0 B, CSCO 250.0 29 B, GOOG 200 580.0 S"));  
//  "Buy: 169850 Sell: 116000; Badly formed 1: CSCO 250.0 29 B ;"
// console.log(G964.balanceStatements("ZNGA 1300 2.66, CLH15.NYM 50 56.32 S, OWW 1000 11.623 S, OGG 20 580.1 S"));
//  "Buy: 0 Sell: 26041; Badly formed 1: ZNGA 1300 2.66 ;"