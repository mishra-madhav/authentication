function redirect(){
    window.location="resume.html";
}

function toggleVisi(){
    let outputDiv=document.getElementById('message');
    outputDiv.style.display='none';

    let signupBox= document.getElementById('signup');
    let loginBox= document.getElementById('login');
    if(signupBox.style.display === 'none'){
        signupBox.style.display = 'block';
        loginBox.style.display = 'none';
    }
}
function toggleVisi2(){
    let outputDiv=document.getElementById('message');
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

    request.open('POST','https://my-json-server.typicode.com/mishra-madhav/mock-json/users');
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
    let outputDiv=document.getElementById('message');

    request.open('GET','https://my-json-server.typicode.com/mishra-madhav/mock-json/users'+username);
    request.send();
    request.onload= ()=>{
        const response=JSON.parse(request.responseText)
        console.log(outputDiv);
        if(response.password===password){
            outputDiv.style.display='block';
            redirect();
        }
        else{
            outputDiv.innerHTML="Retry- wrong username/password combination";
            outputDiv.style.color='red';
            outputDiv.style.display='block';
        }
    }


}