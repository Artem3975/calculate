
class Calculate{
    calc(curs1, curs2,amount1,amount2){
        const percent =parseFloat(curs1) + parseFloat(curs2) + parseFloat(amount1) + parseFloat(amount2);

        return percent;
    }

}
export default new Calculate();