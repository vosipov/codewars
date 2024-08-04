export const digitize = (n: number): number[] => {
    const digits: number[] = [];
    
    while (n > 0){
        digits.push(n % 10);
        n = Math.floor(n / 10);
    }

    return digits.reverse();
};