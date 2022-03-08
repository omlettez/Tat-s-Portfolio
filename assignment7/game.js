window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick = startGame;

}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}



function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*20; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	if(timer != null){clearInterval (timer)}
	timer = setInterval(timeCount, TIMER_TICK);
	x.innerHTML = second;

	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");
		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		second -= 1;
		x.innerHTML = second;
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		if (second > 0 && allbox.length == 0)
		{
			alert("You win!");
			clearInterval(timer);
			x.innerHTML = 0;
		}
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
		if(second <= 0 && allbox.length > 0){
			alert("Game Over!");
			clearScreen();
			clearInterval(timer);
		}

		document.getElementById("reset").onclick = resetGame;
		function resetGame(){
			if (second > 0){
				alert("Reset!");
				clearScreen();
				clearInterval(timer);
				x.innerHTML = null;
			}

		}
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i = 0; i < numbox; i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.style.backgroundColor = colorDrop;
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var box = document.querySelectorAll("#game-layer div");

	//delete all  div
	for (var i = 0; i < box.length; i++){
		box[i].parentNode.removeChild(box[i]);
	}
}




