
export class G964 {

  public static stockList = (listOfArt: Array<string>, listOfCat: Array<string>): string => {
      const listStr: string = listOfArt.join(',');

      const resArr = listOfCat.map(i => {
        const re = new RegExp("\\b(" + i +")\\w+\\s(\\d+)", "g");
        let numb: number = 0;

          const execute = () => {
            const reCheck = re.exec(listStr);
              if (reCheck) {
                numb += +reCheck[2];
                execute();
              }
          }

        execute();
        return `(${i} : ${numb})`
      });

      return !listStr.length ? '' : resArr.join(' - ')
  }
}

console.log(G964.stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]));
//  "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
// console.log(G964.stockList([], ["A", "B", "C", "D"]));
//  ''