	let user = {name: 'vasya', age: 31};
				console.log(user);
				// let jsonUSER = '{"name":"vasya","age":31}';
				let stringify = JSON.stringify(user); // '{"name":"vasya","age":31}'
				console.log(stringify);
				let parse = JSON.parse(stringify);
				console.log(parse);

			let users = [
			                {name: 'vasya', age: 31, status: false},
			                {name: 'petya', age: 30, status: true},
			                {name: 'kolya', age: 29, status: true},
			                {name: 'olya', age: 28, status: false},
			                {name: 'max', age: 30, status: true},
			                {name: 'anya', age: 31, status: false},
			                {name: 'oleg', age: 28, status: false},
			                {name: 'andrey', age: 29, status: true},
			                {name: 'masha', age: 30, status: true},
			                {name: 'olya', age: 31, status: false},
			                {name: 'max', age: 31, status: true}
			            ];
						console.log(users);
			let usersArrayJson = JSON.stringify(users);
			console.log(usersArrayJson);
			
			let parsedJson = JSON.parse(usersArrayJson);
			console.log(parsedJson);