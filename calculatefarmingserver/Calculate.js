
class Calculate{
    calc(price1, price2,token1,token2){
        const percent =parseFloat(price1) + parseFloat(price2) + parseFloat(token1) + parseFloat(token2);

        return percent;
    }

}
export default new Calculate();