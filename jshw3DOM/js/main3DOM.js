// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

    // let user = {
    //     name1212: 'Andriy',
    //     age:23,
    //     status:'true',
    // };

    // let lviv = {
    //     area: 182,
    //     people: 'ukrainian',
    //     cash:'hryvnia',
    // };
    // let dog = {
    //     nikname: 'barbos',
    //     poroda:'Shepherd',
    //     weight: 20,

    // };
    // let ktm = {
    //     successor: 'KTM 690 endurro',
    //     fuelCapacity:'28l',
    //     weightbike: 130,

    // };
    // let ElonMusk = {
    //     education: 'Queen University',
    //     citizenship:'South Africa',
    //     weight: 20,

    // };
    // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
    // let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
    // let renault = {same_name : 'laguna', color : ['black','silver'] , engine: { turbo: '825hp' } };
    // let audi = { type: 'sedan', comfort : ['a/c','airbag'] , audio: { blackpunkt: 'gta1' } };
    // let makaron =   { nik: 'rosana',  price : ['lowcash','hightcash'] , typemakaron: { pasta: 'Corkscrews' } };
    // let motosport = { sport_name: 'enduro', class : ['125hp','250hp'] , bikes: { stroke2T: 'Husaberg' } };
    // - При помощи for in вывести все ключи всех объектов из задания 1 и 2

//     for (const key in user) {
//         console.log('key :>> ', key);
//     }

//     for (const key in lviv) {
//         console.log('key :>> ', key);
//     }

//     for (const key in dog) {
//         console.log('key :>> ', key);
//     }

//     for (const key in ktm) {
//         console.log('key :>> ', key);
//     }

//         for (const key in ElonMusk) {
//             console.log('key :>> ', key);
//     }

//     for (const key in man) {
//         console.log('key :>> ', key);
//     }

//     for (const key in renault) {
//         console.log('key :>> ', key);
//     }

//     for (const key in audi) {
//         console.log('key :>> ', key);
// }

//     for (const key in makaron) {
//         console.log('key :>> ', key);
// }

//     for (const key in motosport) {
//         console.log('key :>> ', key);
// }


// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// let key = Object.keys(user)
// console.log('key :>> ', key);
//-------або можна коротше--------//
// console.log(Object.keys(user));
// console.log(Object.keys(lviv));
// console.log(Object.keys(dog));
// console.log(Object.keys(ktm));
// console.log(Object.keys(ElonMusk));
// console.log(Object.keys(man));
// console.log(Object.keys(makaron));
// console.log(Object.keys(renault));
// console.log(Object.keys(audi));
// console.log(Object.keys(motosport));


// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// let cars = [
//     {model : 'Laguna', yearOfproduction : 2001 , powerEngine : 145 ,color : ['black','green']  },
//     {model : 'Megan', yearOfproduction : 2003 , powerEngine : 200 ,color : ['yellow','grey']  },
//     {model : 'focus', yearOfproduction : 2005 , powerEngine : 180 ,color : ['black','yellow']  },
//     {model : '308', yearOfproduction : 2006 , powerEngine : 145 ,color : ['green','silver']  },
//     {model : 'Passat', yearOfproduction : 2008 , powerEngine : 180 ,color : ['white','green']  },
//     {model : 'Corola', yearOfproduction : 2007 , powerEngine : 280 ,color : ['white','grey']  },
//     {model : 'RAV-4', yearOfproduction : 2009 , powerEngine : 180 ,color : ['yellow','silver']  },
//     {model : 'Slavuta', yearOfproduction : 2010 , powerEngine : 280 ,color : ['black','green']  },
//     {model : 'Lanos', yearOfproduction : 2002 , powerEngine : 100 ,color : ['blue','grey']  },
//     {model : 'Golf', yearOfproduction : 2003 , powerEngine : 180 ,color : ['green','swhite']  },

// ];
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//     {name : 'ua', population : 47000000 , country : 'Ukraine' ,region : 'Kyiv'},
//     {name : 'pl', population : 1999 , country : 'Poland' ,region : 'Lodz'},
//     {name : 'us', population : 5001222 , country : 'USA' ,region : 'New York'},
//     {name : 'de', population : 25000 , country : 'Germany' ,region : 'Berlin'},
//     {name : 'ch', population : 202 , country : 'China' ,region : 'Pekin'},
// ];


// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let carsdriver = [
//     {model : 'Laguna', yearOfproduction : 2001 , powerEngine : 145 ,color : ['black','green'], driver : {name : 'Andriy', age : 23, sex : "female", drivingExperience : 1}  },
//     {model : 'Megan', yearOfproduction : 2003 , powerEngine : 200 ,color : ['yellow','grey'], driver : {name : 'Pasha', age : 43, sex : "female", drivingExperience : 10}  },
//     {model : 'focus', yearOfproduction : 2005 , powerEngine : 180 ,color : ['black','yellow'], driver : {name : 'Yaroslav', age : 27, sex : "female", drivingExperience : 12}  },
//     {model : '308', yearOfproduction : 2006 , powerEngine : 145 ,color : ['green','silver'], driver : {name : 'Olia', age : 28, sex : "male", drivingExperience : 5}  },
//     {model : 'Passat', yearOfproduction : 2008 , powerEngine : 180 ,color : ['white','green'], driver : {name : 'Iana', age : 33, sex : "male", drivingExperience : 18}  },
// ];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while (i < cars.length) {
//     console.log(cars[i]);

//     i++;
// }

// let i = 0;
// while (i < cities.length) {
//     const citiesSave = cities[i];
//     console.log(citiesSave);

//     i++;
// }

// let i = 0;
// while (i < carsdriver.length) {
//     const carsdriver1 = carsdriver[i];
//     console.log(carsdriver1);

//     i++;
// }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let i = 0; i < cars.length; i++) {
//     const cars1 = cars[i];
//     console.log(cars1);
// }

// for (let i = 0; i < cities.length; i++) {
//     const cities1 = cities[i];
//     console.log(cities1);
// }

// for (let i = 0; i < carsdriver.length; i++) {
//     const carsdriver1 = carsdriver[i];
//     console.log(carsdriver1);
// }


// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (const car of cars) {
//     console.log(cars);
// }


// for (const car of carsdriver) {
//     console.log(carsdriver);
// }

// for (const city of cities) {
//     console.log(cities);
// }

// - взять объекты из задания 1 и превратить каждый в json.

// let str = JSON.stringify(dog);
// console.log(str);

// let str = JSON.stringify(user);
// console.log(str);

// let str = JSON.stringify(lviv);
// console.log(str);

// let str = JSON.stringify(ktm);
// console.log(str);

// let str = JSON.stringify(ElonMusk);
// console.log(str);


// - взять json из задания 11 и превратить их обратно в объекты.
// let data = JSON.stringify(carsdriver);
// console.log(data);
// let elem = JSON.parse(data);
// console.log(elem);
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

// for (let i = 0; i < cars.length; i++) {
//     const element = JSON.stringify(cars[i]);
//     console.log(element);
// }


// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// for (let i = 0; i < cities.length; i++) {
//     const element = JSON.stringify(cities[i]);
//     console.log(element);
// }
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let newArray = [];
// for (let i = 0; i < carsdriver.length; i++) {
//     car = carsdriver[i];
//      newArray.push(JSON.stringify(carsdriver[i]));
//     }
//     console.log(newArray);
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users = [
//     {name: 'vasya', age: 31, status: false, skills : ['java','js','angular']},
//     {name: 'petya', age: 30, status: true, skills : ['C#','.net']},
//     {name: 'kolya', age: 29, status: true, skills : ['python','Django']},
//     {name: 'anya', age: 31, status: false, skills : ['ruby','ruby on rails']},
//     {name: 'oleg', age: 28, status: false, skills : ['node.js','js']},
//     {name: 'andrey', age: 29, status: true, skills : ['vue','react']},
//     {name: 'masha', age: 30, status: true, skills : ['c','c++']},

// ];

// for (const user of users) {

//     console.log('Name - ',user.name);

//     for (const skill of user.skills) {

//         console.log('skill :>> ', skill);
//     }
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let newarray = [];
// for (let i = 0; i < users.length; i++) {

//     const element = users[i];


//     for (let i = 0; i < element.skills.length; i++) {

//         newarray.push(element.skills[i]);


//     }
// }
//  console.log(newarray);


// let newArray = [];
// for (const user of users) {

//     for (const skill of user.skills) {

//         newArray.push(skill)

//     }
// }
//console.log(newArray);
// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//   let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

// for (const user of users) {

//     for (const skill of user.skills) {

//         console.log(skill);
//     }
// }

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//  let users = [{
//                             name: 'vasya',
//                             age: 31,
//                             status: false,
//                             address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//                         }, {
//                             name: 'petya',
//                             age: 30,
//                             status: true,
//                             address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//                         }, {
//                             name: 'kolya',
//                             age: 29,
//                             status: true,
//                             address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//                         }, {
//                             name: 'olya',
//                             age: 28,
//                             status: false,
//                             address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//                         }, {
//                             name: 'max',
//                             age: 30,
//                             status: true,
//                             address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//                         }, {
//                             name: 'anya',
//                             age: 31,
//                             status: false,
//                             address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//                         }, {
//                             name: 'oleg',
//                             age: 28,
//                             status: false,
//                             address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//                         }, {
//                             name: 'andrey',
//                             age: 29,
//                             status: true,
//                             address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//                         }, {
//                             name: 'masha',
//                             age: 30,
//                             status: true,
//                             address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//                         }, {
//                             name: 'olya',
//                             age: 31,
//                             status: false,
//                             address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//                         }, {
//                             name: 'max',
//                             age: 31,
//                             status: true,
//                             address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//                         }];


// let newAdr = [];
// for (const user of users) {

//     newAdr.push(user.address);

// }
// console.log(newAdr);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.


// for (const user of users) {

//     let item = document.createElement('div');
//     item.innerText =`${user.name} ${user.age} ${user.status} ${user.address}`; //Виводить [object Object] Як вивести address (знайти ще один спосіб) ???
//     document.body.appendChild(item)

// }
//--------ось так на відео----
// for (let i = 0; i < users.length; i++) {
//     const user = users[i];

//     let item = document.createElement('div');
//     let address = '';
//     for (const address1 in user.address) {
//      address = address + "  " + user.address[address1];
//     }

//     item.innerText =`${user.name} ${user.age} ${user.status} ${address}`;
//     document.body.appendChild(item)

// }



// - За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)




// for (let i = 0; i < users.length; i++) {
//     const user = users[i];

//     let div = document.createElement('div');
//     let h3 = document.createElement('h3');
//     let p1 = document.createElement('p');
//     let p2 = document.createElement('p');
//     let p3 = document.createElement('p');
//     let address = '';

//     for (const address1 in user.address) {
//      address = address + "  " + user.address[address1];
//     }

//     h3.innerText = user.name;
//     p1.innerText = user.age;
//     p2.innerText = address;
//     p3.innerText = user.status;

//     div.appendChild(h3);
//     div.appendChild(p1);
//     div.appendChild(p2);
//     div.appendChild(p3);

//     document.body.appendChild(div);

// }




// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];

//     let div = document.createElement('div');
//     let name = document.createElement('h1');
//     let age = document.createElement('p');
//     let status = document.createElement('p');
//     let address = document.createElement('div');


//     for (const item in user.address) {
//     const temp = document.createElement('div');
//     temp.innerText = user.address[item];
//         address.appendChild(temp);

//     }

//     name.innerText = user.name;
//     age.innerText = user.age;
//     status.innerText = user.status;

//     div.appendChild(name);
//     div.appendChild(age);
//     div.appendChild(status);
//     div.appendChild(address);

//     document.body.appendChild(div);

// }


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
            // let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
            // let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .


// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

// for (const user of usersWithId) {

//     for (const city of citiesWithId) {
//         if (user.id === city.user_id) {
//             user.address = city;        }
//     }
// }

// console.log(usersWithId);

//------за допомогою forEach і функції find------

// usersWithId.forEach(user => {
//     user.address = citiesWithId.find(value => value.user_id === user.id)
// });
// console.log(usersWithId);


// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

// - змінити цей текст використовуючи селектори id, class,  tag



// const elementById = document.getElementById('content');
// const innerText = elementById.innerText;
// console.log(innerText);


// const elementsByClassName = document.getElementsByClassName('rules');

// for (let element of elementsByClassName) {
//   element.innerText = "bada BOOM!!! "
// }


// const elementsByClassName = document.getElementsByTagName('h2');
// for (let element of elementsByClassName) {
//     console.log(element);
// }
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// const setSize = document.getElementsByTagName('h2');
// console.log(setSize);
// for (const element of setSize) {
//   element.style.width = '300px';
//   element.style.height = '300px';
//   element.style.marginTop ='300px';

// }
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

// let table = document.createElement('table' );
// let tr = document.createElement('tr');
// let td = document.createElement('td');
// let td2 = document.createElement('td');
// let td3 = document.createElement('td');


// tr.appendChild(td);
// tr.appendChild(td2);
// tr.appendChild(td3);

// table.appendChild(tr);

// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

// let table = document.createElement('table' );
// for (let i = 0; i < 10; i++) {
//   let tr = document.createElement('tr');
//     for (let i = 0; i < 3; i++) {
//       let td = document.createElement('td');
//       tr.appendChild(td);
//     }

//   table.appendChild(tr);
// }


// document.body.appendChild(table);

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

// let table = document.createElement('table' );
// for (let i = 0; i < 10; i++) {
//   let tr = document.createElement('tr');
//     for (let i = 0; i < 5; i++) {
//       let td = document.createElement('td');
//       tr.appendChild(td);
//     }

//   table.appendChild(tr);
// }


// document.body.appendChild(table);
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
//  let n = prompt('Ввід рядків');
//  let m = prompt('Ввід стовбців');
// let table = document.createElement('table' );
// for (let i = 0; i < n; i++) {
//   let tr = document.createElement('tr');
//     for (let i = 0; i < m; i++) {
//       let td = document.createElement('td');
//       tr.appendChild(td);
//     }

//   table.appendChild(tr);
// }


// document.body.appendChild(table);

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class

//-----не працює----
// const elementsByTagName = document.getElementsByTagName('*');
//     for (let tag of elementsByTagName) {
//         if (tag.getAttribute('i')) {
//             console.log(tag);
//         }

// }


// const eleqmentList = document.querySelectorAll('[id]');
// console.log(eleqmentList);
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!


// const setSize = document.getElementsByTagName('p');
// console.log(setSize);
// for (const element of setSize) {
//   element.innerText = '2000грн';
//   element.style.background = 'red';

// }

//  - знайти всі div та змінити ім колір на червоний

// const setSize = document.getElementsByTagName('div');
// console.log(setSize);
// for (const element of setSize) {
//   element.style.background = 'red';

// }

// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// const arrayH2 = document.getElementsByTagName('h2');
// const content = document.getElementById('content');

// const ul = document.createElement('ul'); 
// for (const h2 of arrayH2) {
//     const li = document.createElement('li');
     
//     li.innerText = h2.innerText;
//     ul.appendChild(li);
// }
// content.appendChild(ul);


			let rules = [
    				{
        					title: 'Первое правило Бойцовского клуба.',
        					body: 'Никому не рассказывать о Бойцовском клубе.'
        				},
        				{
            					title: 'Второе правило Бойцовского клуба.',
            					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
            				},
            				{
                					title: 'Третье правило Бойцовского клуба.',
                					body: 'В схватке участвуют только двое.'
                				},
                				{
                    					title: 'Четвертое правило Бойцовского клуба.',
                    					body: 'Не более одного поединка за один раз.'
                    				},
                    				{
                        					title: 'Пятое правило Бойцовского клуба.',
                        					body: 'Бойцы сражаются без обуви и голые по пояс.'
                        				},
                        				{
                            					title: 'Шестое правило Бойцовского клуба.',
                            					body: 'Поединок продолжается столько, сколько потребуется.'
                            				},
                            				{
                                					title: 'Седьмое правило Бойцовского клуба.',
                                					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
                                				},
                                				{
                                    					title: 'Восьмое и последнее правило Бойцовского клуба.',
                                    					body: 'Новичок обязан принять бой.'
                                    				},
                                    
                                    			];
                                    
                                    
                                    
// -Є масив котрий характеризує правила. 
//Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Ріезультатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

 const wrap = document.createElement('div');
 wrap.id = 'wrap';
 for (let i = 0; i < rules.length; i++) {
     const rule = rules[i];
     const div = document.createElement('div');
     const h2 = document.createElement('h2');
     const p = document.createElement('p');
     div.className = `rules rule${i}`;
     h2.innerText = rule.title;
     p.innerText = rule.body;
     div.appendChild(h2);
     div.appendChild(p);

     wrap.appendChild(div) 
 }
document.body.appendChild(wrap)     
                                    // *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
                                    // *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
                                    // *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту