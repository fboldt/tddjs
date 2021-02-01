class StringCalculator {
    add(string){
        const strarray = string.split(',');
        let value = 0;
        strarray.forEach(element => {
            value += Number(element);
        });
        return value;
    }
}
module.exports = StringCalculator;
