document.querySelector('#submitBtn').addEventListener('click',function(){
    // get password value
    const passwordFiled = document.querySelector('#passwordFiled');
    const passwordFiledValue = passwordFiled.value ;
    console.log(passwordFiledValue)
    
    // get email value
    const emailFiled = document.querySelector('#emailFiled');
    const emailFiledValue = emailFiled.value

    
    // set password value and email value
    if(passwordFiledValue === 'arefine' && emailFiledValue === "arefine@gmail.com" ){
        document.location.href = "bank.html"
    }else{
        alert('your input not valid')
    }
    emailFiled.value =" ";
    passwordFiled.value =" ";
    
})