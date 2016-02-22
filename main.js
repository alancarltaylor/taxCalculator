module.exports = {
  calcTax: function(income){
    var tax = 0
    if (income <= 10){
      tax = (income* .1)

    }
    else if((income <= 20) && (income > 10)){
      tax = (((income-10)*.07) + 1)
    }
    else if((income <= 30) && (income > 20)){
      tax = (((income-20)*.05) + 1.7)
    }
    else if(income > 30){
      tax = (((income-30)*.03) + 2.2)
    }
    return tax;
}
}
