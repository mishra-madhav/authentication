function toggleVisi(){
    let outputDiv=document.getElementById('CV');
    outputDiv.style.display='none';

    let signupBox= document.getElementById('signup');
    let loginBox= document.getElementById('login');
    if(signupBox.style.display === 'none'){
        signupBox.style.display = 'block';
        loginBox.style.display = 'none';
    }
}
function toggleVisi2(){
    let outputDiv=document.getElementById('CV');
    outputDiv.style.display='none';

    let signupBox= document.getElementById('signup');
    let loginBox= document.getElementById('login');
    if(loginBox.style.display === 'none'){
        loginBox.style.display = 'block';
        signupBox.style.display = 'none';
    }
}

function signup(){
    

    let request=new XMLHttpRequest();
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    let repassword=document.getElementById('repassword').value;
    
    if(password != repassword) return;

    request.open('POST','http://localhost:3000/users');
    request.setRequestHeader("Content-Type", "application/json");
    request.send(
        JSON.stringify({
            "id":username,
            "password":password
        })
    );
}

function login(){
    let request=new XMLHttpRequest();
    let username=document.getElementById('loginUsername').value;
    let password=document.getElementById('loginPassword').value;
    let outputDiv=document.getElementById('CV');
    console.log(username, password);

    request.open('GET','http://localhost:3000/users/'+username);
    request.send();
    request.onload= ()=>{
        const response=JSON.parse(request.responseText)
        console.log(outputDiv);
        if(response.password===password){
            outputDiv.style.display='block';
        }
        else{
            outputDiv.innerHTML="Access Denied";
            outputDiv.style.color='red';
            outputDiv.style.display='block';
        }
    }


}