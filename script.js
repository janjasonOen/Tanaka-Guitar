const menu = document.querySelector('#mobileMenu')
const menuLinks = document.querySelector('.navbarMenu')
const mobile_menu = () =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
menu.addEventListener('click', mobile_menu)

function  validateRegis(){
    const form =  document.forms('formsignup');
    const firstName = form['firstName'].value;
    const lastName = form['lastName'].value;
    const gender = form['gender'].value;
    const phone = form['phone'].value;
    const email = form['email'].value;
    const adress = form['adress'].value;
    const isCheck = form['tnc'].checked;

    let message = ''
    if(!firstName || !lastName || !gender || !phone || !email || !adress){
        message = "All field must be filled!"
    }else if(firstName.length < 2){
        message = "Name must be minimum 2 characters!"
    }else if(lastName.length < 2){
        message = "Name must be minimum 2 characters!"
    }else if(gender != 'Male' && gender != 'Female'){
        message = "Please input your gender!"
    }else if(phone.length < 8){
        message = "Number not correct!"
    }else if(adress.length < 4){
        message = "adress must be minimum 10 characters!"
    }else if(!isCheck){
        message = "You must agree to our terms and conditions!"
    }

    if(message){
        document.getElementById('errorMsg').innerHTML = message
        return false;
    }else{
        let conf = confirm("Are you sure want to continue?")
    }
}
