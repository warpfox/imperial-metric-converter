/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    if (input.includes('/')){
      var numArr = result.split('/')
      var result = parseFloat(numArr[0] / numArr[1])
    } else {
      var result = input.split(/[a-z]/gi)[0]
    }
    console.log(result)
    return result;
  };
  
  this.getUnit = function(input) {
    // var result = input.split(/([a-z])/gi)
    // console.log(result)
    // return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
