const calculateFibonacci = async (n) => {
    var n1 = 0,  n2 = 1, next_num, i;
    var fibonacci = '';
  
    for ( i = 1; i <= n; i++)  {
        if(i!=n){
            fibonacci = fibonacci.concat(String(n1)+',');
            next_num = n1 + n2;  
            n1 = n2; 
            n2 = next_num;
        }
        else if(i==n){
            fibonacci = fibonacci.concat(String(n1));
            next_num = n1 + n2;  
            n1 = n2; 
            n2 = next_num;
        } 
    }
    return fibonacci;   
}


module.exports = {
    calculateFibonacci,
}