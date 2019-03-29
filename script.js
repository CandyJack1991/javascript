console.log('Задание №1');

var a = prompt ('Введите число А ');
var b = prompt ('Введите число Б');
if ( ( a > 0 ) && ( a != 0 && b != 0)){
		console.log ('Разность а и б', a / b );
	}
else if ( a == 0){
		console.log('Ноль делить нельзя');
	}
else if ( b == 0){
		console.log('На ноль делить нельзя');
	}
else if ( ( a < 0 && b > 0) && ( a > 0 && b < 0 )){
		console.log('Сумма а и б', a + b);
	}
else {
	console.log('Произведение а и б', a * b)
};

console.log('Задание №2');

var a = prompt('Введите любое число для вычислений');
var b = prompt('Введите любое число для вычислений');
var operetion = prompt('Введите число в соответствии с операцией. 1 - умножение 2 - деление 3 - сложение 4 - вычетание');

function calculete (operetion)
{
	if (operetion == 1){
		output = a * b;
	}
	else if (operetion == 2){
		output = a / b;
	}
	else if (operetion == 3){
		output = a + b;
	}
	else if (operetion == 4){
		output = a - b;
	}
	else{
		output = alert ('Нет такой оперции, введите значение от 1 до 4');
	}
	return output;
}
console.log(calculete(operetion));

console.log('Игра угадай число');
game1(Math.floor(Math.random() * 8 + 1));
function game1(random){
	a = random; //загадал число
	game(a);
	function game (a){
		b = prompt ('Я загадал цифру, попробуй отгадать. Введите любую цифру');
		if ( b > a ) {
			console.log('Загаданая цифра меньше, попробуй еще раз');
			return ( game(a));
		}
		else if ( b < a ){
			console.log('Загаданая цифра больше, поробуй еще раз');
			return ( game(a));
		}
		else if ( b == a ){
			console.log('Поздравляю ты угал, давай сыграем еще раз');
			return ( game1(Math.floor(Math.random() * 8 + 1)));
		}
		else {
			console.log ('Неведомая проблема');
		}
	}
}

