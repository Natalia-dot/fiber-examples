export const randomNumber = (x) => {
    let primary = Math.random() * x;
    let primaryString = primary.toString();
    let [number, decimal] = primaryString.split('.');
    if(decimal[0] < 5) {
        return(Math.floor(number))
    } else {
        return(1 + parseInt(number))

    }
}
