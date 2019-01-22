var container = document.getElementById('game-container');
var title = document.getElementById('title');
var description = document.getElementById('description');

var buttons = document.getElementById('game-buttons');
var button_1 = document.getElementById('button1');
var button_2 = document.getElementById('button2');
var button_3 = document.getElementById('button3');

var inventory = document.getElementById('inventoryItem');

	title.innerHTML = ('one piece crew hunt');
	button_1.innerHTML = ('START')
	button_2.innerHTML = ('UITLEG')
	button_3.innerHTML = ('VERHAAL')
	inventory.style.display = 'none';
	description.style.display = 'none';


var buttonDiv1 = document.createElement("div");
button_1.appendChild(buttonDiv1);
buttonDiv1.id = ("but1");

buttonDiv1.innerHTML = ('we gaan beginnen');

var startgame1 = document.createElement("button");
buttonDiv1.appendChild(startgame1);
startgame1.id = ("JA");

startgame1.innerHTML = ("JA");

var startgame2 = document.createElement("button");
buttonDiv1.appendChild(startgame2);
startgame2.id = ("NEE");

startgame2.innerHTML = ("NEE");

var level2_2 = document.createElement("button");
document.body.appendChild(level2_2);
level2_2.id = "zoro2";

level2_2.innerHTML = ("zoro laten");

	level2_2.style.display = 'none';


var level2_1 = document.createElement("button");
document.body.appendChild(level2_1);
level2_1.id = "zoro1";

level2_1.innerHTML = ("zoro redden");

	level2_1.style.display = 'none';

	var level2_2 = document.createElement("button");
document.body.appendChild(level2_2);
level2_2.id = "zoro2";

level2_2.innerHTML = ("zoro laten");

	level2_2.style.display = 'none';



		var level3_1 = document.createElement("button");
document.body.appendChild(level3_1);
level3_1.id = "nami";

	level3_1.innerHTML = ("nami");

		level3_1.style.display = 'none';


var level4_1 = document.createElement("button");
document.body.appendChild(level4_1);
level4_1.id = "usopp";

level4_1.innerHTML = ("usopp");

	level4_1.style.display = 'none';

	var level5_1 = document.createElement("button");
document.body.appendChild(level5_1);
level5_1.id = "sanji";

level5_1.innerHTML = ("sanji");

	level5_1.style.display = 'none';

		var level6_1 = document.createElement("button");
document.body.appendChild(level6_1);
level6_1.id = "chopper";

level6_1.innerHTML = ("chopper");

	level6_1.style.display = 'none';

		var level7_1 = document.createElement("button");
document.body.appendChild(level7_1);
level7_1.id = "krokodil";

level7_1.innerHTML = ("verslaan");

	level7_1.style.display = 'none';

	var level8_1 = document.createElement("button");
document.body.appendChild(level8_1);
level8_1.id = "franky";

level8_1.innerHTML = ("franky");

	level8_1.style.display = 'none';

	var level9_1 = document.createElement("button");
document.body.appendChild(level9_1);
level9_1.id = "brook";

level9_1.innerHTML = ("brook");

	level9_1.style.display = 'none';

	var level10_1 = document.createElement("button");
document.body.appendChild(level9_1);
level10_1.id = "win";

level10_1.innerHTML = ("gewonnen");

	level10_1.style.display = 'none';





button_1.onclick = function(){
	buttonDiv1.style.display = 'block';
	buttonDiv2.style.display = 'none';
	buttonDiv3.style.display = 'none';
	level2_1.style.display = 'none';
	level3_1.style.display = 'none';
}

var buttonDiv2 = document.createElement("div")
button_2.appendChild(buttonDiv2)
buttonDiv2.id = ("but2")

buttonDiv2.innerHTML = ('je speelt dit verhaal als luffy een piraat die devil fruit heb gegeten en de sinds dien is ze lichaam zoals rubber en jij gaat je droom waar maken koning van de piraten te worden maar dan moet je wel een crew hebben en die je ga jij zoeken')

button_2.onclick = function(){
	buttonDiv1.style.display = 'none';
	buttonDiv2.style.display = 'block';
	buttonDiv3.style.display = 'none';
}

var buttonDiv3 = document.createElement("div")
button_3.appendChild(buttonDiv3)
buttonDiv3.id = ("but3")

buttonDiv3.innerHTML = ('je gaat van eiland naar eiland waar je keuzes kan maken als je de goeie keuzen maakt joint iemand je groep zo niet dan zal het ooit een keer ergens fout gaan')

button_3.onclick = function(){
	buttonDiv1.style.display = 'none';
	buttonDiv2.style.display = 'none';
	buttonDiv3.style.display = 'block';
}


startgame1.onclick = function(){

	var crew = document.createElement("div")
	document.body.appendChild(crew)
	crew.id = "Crew"
	crew.innerHTML = ('crew: ')

	title.innerHTML = ('goat island');
	button_3.style.display = 'none';
	button_2.style.display = 'none';
	button_1.style.display = 'none';
	description.style.display = ('ewfgigirebgbehgb');

	level2_2.onclick = function(){
	level2_1.style.display = 'none';
	level2_2.style.display = 'none';
	backgroundImage.style.display = 'none';
	crew.style.display = 'none';
	fail();
	}

	document.body.style.backgroundImage = "url('img/alvida.jpg')";
	window.alert('okay dan gaan we beginnen')


var level1_1 = document.createElement("button");
document.body.appendChild(level1_1);
level1_1.id = "alvida";

level1_1.innerHTML = ("alvida");

level1_1.onclick = function(){
	title.innerHTML = ('shells town');
	button_3.style.display = 'none';
	button_2.style.display = 'none';
	button_1.style.display = 'none';
	level1_1.style.display = 'none';
	level2_1.style.display = 'inline';
	level2_2.style.display = 'inline';

	level2_2.onclick = function(){
	level2_1.style.display = 'none';
	level2_2.style.display = 'none';
	crew.style.display = 'none';
	fail();
	}


	document.body.style.backgroundImage = "url('img/zoro.jpg')";

}
}


level2_1.onclick = function(){
	title.innerHTML = ('orange town');
	button_3.style.display = 'none';
	button_2.style.display = 'none';
	button_1.style.display = 'none';
	level2_1.style.display = 'none';
	level3_1.style.display = 'inline';

	var img = document.createElement('img');
	img.id = 'zoroWanted';
	document.body.appendChild(img);
	img.src = 'img/zoro-wanted.jpg';


	document.body.style.backgroundImage = "url('img/nami.jpg')";


}

level3_1.onclick = function(){
	title.innerHTML = ('gecko island');
	button_3.style.display = 'none';
	button_2.style.display = 'none';
	button_1.style.display = 'none';
	level3_1.style.display = 'none';
	level4_1.style.display = 'inline';

	var img = document.createElement('img');
	img.id = 'zoroWanted';
	document.body.appendChild(img);
	img.src = 'img/zoro-wanted.jpg';

	document.body.style.backgroundImage = "url('img/usopp.jpg')"

}

level4_1.onclick = function(){
	title.innerHTML = ('de baratie');
	button_3.style.display = 'none';
	button_2.style.display = 'none';
	button_1.style.display = 'none';
	level4_1.style.display = 'none';
	level5_1.style.display = 'inline';

	var img = document.createElement('img');
	img.id = 'zoroWanted';
	document.body.appendChild(img);
	img.src = 'img/zoro-wanted.jpg';

	document.body.style.backgroundImage = "url('img/wanted.jpg')"

}

level5_1.onclick = function(){
	title.innerHTML = ('drum island');
	button_3.style.display = 'none';
	button_2.style.display = 'none';
	button_1.style.display = 'none';
	level5_1.style.display = 'none';
	level6_1.style.display = 'inline';

	var img = document.createElement('img');
	img.id = 'zoroWanted';
	document.body.appendChild(img);
	img.src = 'img/zoro-wanted.jpg';

	document.body.style.backgroundImage = "url('img/wanted.jpg')"

}

level6_1.onclick = function(){
	title.innerHTML = ('alabasta');
	button_3.style.display = 'none';
	button_2.style.display = 'none';
	button_1.style.display = 'none';
	level6_1.style.display = 'none';
	level7_1.style.display = 'inline';

	var img = document.createElement('img');
	img.id = 'zoroWanted';
	document.body.appendChild(img);
	img.src = 'img/zoro-wanted.jpg';

	document.body.style.backgroundImage = "url('img/wanted.jpg')"

}

level7_1.onclick = function(){
	title.innerHTML = ('franky');
	button_3.style.display = 'none';
	button_2.style.display = 'none';
	button_1.style.display = 'none';
	level7_1.style.display = 'none';
	level8_1.style.display = 'inline';

	var img = document.createElement('img');
	img.id = 'zoroWanted';
	document.body.appendChild(img);
	img.src = 'img/zoro-wanted.jpg';

	document.body.style.backgroundImage = "url('img/wanted.jpg')"

}

level8_1.onclick = function(){
	title.innerHTML = ('brook');
	button_3.style.display = 'none';
	button_2.style.display = 'none';
	button_1.style.display = 'none';
	level8_1.style.display = 'none';
	level9_1.style.display = 'inline';

	var img = document.createElement('img');
	img.id = 'zoroWanted';
	document.body.appendChild(img);
	img.src = 'img/zoro-wanted.jpg';

	document.body.style.backgroundImage = "url('img/wanted.jpg')"

}

level9_1.onclick = function(){
	title.innerHTML = ('gewonnen');
	button_3.style.display = 'none';
	button_2.style.display = 'none';
	button_1.style.display = 'none';
	level9_1.style.display = 'none';
	level10_1.style.display = 'inline';

	button_1.onclick = fail;

	var img = document.createElement('img');
	img.id = 'zoroWanted';
	document.body.appendChild(img);
	img.src = 'img/zoro-wanted.jpg';

	document.body.style.backgroundImage = "url('img/wanted.jpg')"

}



startgame2.onclick = function (){
	title.style.display = 'none';
	button_3.style.display = 'none';
	button_2.style.display = 'none';
	button_1.style.display = 'none';
	fail()
}

function fail() {
	title.style.display= 'none';

	var img = document.createElement('img');
	img.id = 'dead';
	document.body.appendChild(img);
	img.src = 'img/dead.gif';
}


