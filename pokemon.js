function Pokemon(n, t, v, a, g, i)
{
	this.nombre = n;
	this.tipo = t;
	this.vida = v;
	this.ataque = a;
	this.grito = g;
	this.imagen = i;
}

var opciones = ["pikachu", "charmander", "rattata"];
var opcionUsuario;

var pikachu = new Pokemon("Pikachu", "Eléctrico",
	100, 70, "¡PIKA!", "http://pokemonqrcode.com/image/cache/catalog/Pokemon/Gen1/pikachu-500x500.jpg");
var charmander = new Pokemon("Charmander", "Fuego",
	120, 60, "¡CHARMANDER!", "http://pokemonqrcode.com/image/cache/catalog/Pokemon/Gen1/charmander-500x500.jpg" );
var rattata = new Pokemon("Rattata", "Normal",
	90, 50, "¡RAT!", "http://pokemonqrcode.com/image/cache/catalog/Pokemon/Gen1/rattata-500x500.jpg");


function iniciar()
{
	opcionUsuario = prompt("¿Qué Pokemon eliges?\n" +
		"Pikachu: 0\nCharmander: 1\nRattata: 2");

	if(opciones[opcionUsuario] == "pikachu")
	{
		nombrePokemon.innerText = pikachu.nombre;
		document.write("<img src=" + pikachu.imagen 
		+ "/>");
		datosPokemon.innerText = "Tiene: " + 
		pikachu.vida + " puntos de vida,\n\n" + 
		"Su poder de ataque es de: " + 
		pikachu.ataque + "\n\n" + "Grita así: " +
		pikachu.grito;
		alert(pikachu.grito);
	}
	else if(opciones[opcionUsuario] == "charmander")
	{
		nombrePokemon.innerText = charmander.nombre;
		document.write("<img src="+ charmander.imagen
		+ "/>");
		datosPokemon.innerText = "Tiene: " + 
		charmander.vida + " puntos de vida,\n\n" + 
		"Su poder de ataque es de: " + 
		charmander.ataque + "\n\n" + "Grita así: " +
		charmander.grito;
		alert(charmander.grito);
	}
	else if(opciones[opcionUsuario] == "rattata")
	{
		nombrePokemon.innerText = rattata.nombre;
		document.write("<img src=" + rattata.imagen 
		+ "/>");
		datosPokemon.innerText = "Tiene: " + 
		rattata.vida + " puntos de vida,\n\n" + 
		"Su poder de ataque es de: " + 
		rattata.ataque + "\n\n" + "Grita así: " +
		rattata.grito;
		alert(rattata.grito);
	}
	else if(opcionUsuario < 0 || opcionUsuario > 2)
	{
		alert("No elegiste una opción válida.");
		iniciar();
	}
}
		
						

//Document Object Model
//var pi = 3.141592654
//pi = Math.floor(pi);
//document.write(pi);
//var maxima;
//maxima = Math.max( 4,5,6,56,432 );
//document.write(maxima);