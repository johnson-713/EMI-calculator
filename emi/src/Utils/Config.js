export function numberWithComas(number) {
    if(number) return `\u20B9 ${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}