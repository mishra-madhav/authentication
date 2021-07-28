function toggleVisi(){
    let signupBox= document.getElementById('signup');
    let loginBox= document.getElementById('login');
    if(signupBox.style.display === 'none'){
        signupBox.style.display = 'block';
        loginBox.style.display = 'none';
    }
}
function toggleVisi2(){
    let signupBox= document.getElementById('signup');
    let loginBox= document.getElementById('login');
    if(loginBox.style.display === 'none'){
        loginBox.style.display = 'block';
        signupBox.style.display = 'none';
    }
}