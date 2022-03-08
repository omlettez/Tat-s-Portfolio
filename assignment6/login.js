window.onload = loginLoad;

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const usnm = urlParams.get('username')
console.log(usnm);

const pssw = urlParams.get('password')
console.log(pssw);

function loginLoad(){
	const loginForm = document.getElementById("myLogin");
	loginForm.onsubmit = checkLogin;

}


function checkLogin() {
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var us = document.getElementById("username").value;
	var pw = document.getElementById("password").value;
	console.log(us.value);
	console.log(pw.value);

	if(us === usnm && pw === pssw){
		//document.getElementById("login").disabled = false;
		alert("Login Success");
		document.getElementById('message').innerHTML = '';
	}
	else if(us != usnm || pw != pssw){
		//document.getElementById("login").disabled = true;
		alert("Wrong username or password");
		document.getElementById('message').style.color = 'red';
		document.getElementById('message').innerHTML = 'Wrong username or password!';

		return false;
	}
	
}

