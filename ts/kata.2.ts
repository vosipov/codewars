export function sumArray(array:number[] | null) : number {
    if (array === null || array.length == 0 || array.length == 1){
      return 0;
    }
    
    let minValue: number = array[0];
    let maxValue: number = array[0];
    let sum: number = 0;
    
    for (let value of array){
      if (value < minValue){
        minValue = value;
      }
      
      if (value > maxValue){
        maxValue = value;
      }
      
      sum += value;
    }
    
    console.log(`sum: ${sum}, minValue: ${minValue}, maxValue: ${maxValue}`);
    
    sum -= minValue;
    sum -= maxValue;
    
    console.log(sum);
    
    return sum;
  }