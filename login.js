const form=document.getElementById('form');
const username =document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
});
const setError=(element,message)=>
{
const inputControl =element.parentElement;
const errorDisplay = inputControl.querySelector('.error');

errorDisplay.innerText = message;
inputControl.classList.add('error');
inputControl.classList.remove('success');
}
const setSuccess =element =>{
    const inputControl =element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText='';
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};
const isValidEmail = email=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*|(".+"))@((\[[0-9]]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\));
    return re.test(String(email).tolowercase());
}

const validateInputs=()=>{
    const usernameValue = username.Value.trim();
    const emailValue = email.Value.trim();
    const passwordValue = password.Value.trim();
    const password2Value = password2.Value.trim();
    if(usernameValue===''){
        setError(username,'Username is required');
    }else{
        setSuccess(username);
    }
    if(emailValue===''){
        setError(email,'Email is required');
    }
    else if(!isValidEmail(emailValue)){
        setError(email, 'Provide a vaild email address');
    }
    else{
        setSuccess(email);
    }
    if(passwordValue ===''){
        setError(password,'Password is required');
    }else if(passwordValue.length<8){
        setError(password,'Password must be at least 8 CharacterData.')
    }
    else{
        setSuccess(password);
}
if(password2Value ===''){
    setError(password2,'Please confrim your password');
}else if(password2Value !== passwordValue){
    setError(password2,"Password doesn't match.")
}
else{
    setSuccess(password2);
}
}
