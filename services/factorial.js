var factorial = function(n){n=BigInt(n);return (n==0n||n==1n)?1n:factorial(n-1n)*n;}

const calculateFactorial = async (Numero) => {
    return String(factorial(Number(Numero)));
}

module.exports = {
    calculateFactorial,
}