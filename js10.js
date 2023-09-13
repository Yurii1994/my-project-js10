 // import menu from './menu.json'
 const arr =
     [
         {
             "id": "XWaQXcbk0",
             "name": "Картофель, запеченный в мундире",
             "description": "Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.",
             "image": "https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg",
             "price": 100,
             "ingredients": [
                 "Картофель",
                 "Чеснок",
                 "Сметана",
                 "Бекон",
                 "Твердый сыр",
                 "Зеленый лук"
             ]
         },
         {
             "id": "pkXzyRp1P",
             "name": "Томатный магрибский суп",
             "description": "Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов. Дополнят блюдо свежая кинза и отдельные дольки лимона.",
             "image": "https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg",
             "price": 150,
             "ingredients": [
                 "Помидоры",
                 "Куриный бульон",
                 "Мед",
                 "Петрушка",
                 "Кинза",
                 "Паприка"
             ]
         },
         {
             "id": "QMom9q4Ku",
             "name": "Крем-суп из тыквы",
             "description": "Портрет этой оранжевой похлебки украшает обложку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, придумавший так называемую новую кухню, считал тыкву одной из основ этого миропорядка, а тыквенный суп — эдакой околоплодной водой гастрономии.",
             "image": "https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png",
             "price": 100,
             "ingredients": ["Тыква", "Петрушка", "Сливки", "Бренди", "Куриный бульон"]
         },
         {
             "id": "k2k0UrjZG",
             "name": "Салат из красной фасоли с творожным сыром",
             "description": "Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.",
             "image": "https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg",
             "price": 150,
             "ingredients": [
                 "Фасоль",
                 "Соль",
                 "Чеснок",
                 "Оливковое масло",
                 "Творожный сыр",
                 "Красный лук"
             ]
         },
         {
             "id": "j2k8U1jZd",
             "name": "Классический греческий салат ",
             "description": "Это рецепт из старой, привезенной из Греции, кулинарной книги. Секрет салата — свежайшие овощи и хорошая фета. Для салата используют только оливковое масло, а такие специи, как орегано и базилик, являются визитной карточкой греческой кухни.",
             "image": "https://dietdo.ru/wp-content/uploads/2017/03/Grecheskiy-salat-retsept-klassicheskiy-s-foto-poshagovo-min.jpg",
             "price": 350,
             "ingredients": [
                 "Оливковое масло",
                 "Лимонный сок",
                 "Чеснок",
                 "Помидоры",
                 "Красный лук",
                 "Сыр фета",
                 "Маслины"
             ]
         },
         {
             "id": "X2aQ7cvkd",
             "name": "Маффины с голубикой и мускатным орехом",
             "description": "Культовая ягода, которую научились производить круглый год, в сочетании с рыхлым тестом — это абсолютно беспроигрышный вариант. Маффины с голубикой стали популярным десертом в Англии и Америке, хотя происхождение их французское. Да и вообще эти маленькие сладкие кексы, какими мы их знаем сейчас, задумывались как обычный хлеб и на вкус были нейтральны.",
             "image": "https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg",
             "price": 170,
             "ingredients": [
                 "Сливочное масло",
                 "Пшеничная мука",
                 "Голубика",
                 "Ванильный экстракт",
                 "Мускатный орех"
             ]
         },
         {
             "id": "nk3zy1pf8",
             "name": "Азу по‑татарски",
             "description": "Одно из немногих блюд, удостоившихся в советской продуктовой традиции продажи с именной нарезкой. И до сих пор в кулинариях и супермаркетах можно найти говядину, которую режут соломкой и продают как азу. Насчет самого блюда до сих пор идут споры, как и с чем готовить: использовать говядину или баранину, топленое или обычное масло, тушить в казане или сотейнике с толстым дном. Редакций этого блюда может быть много, но основа его всегда неизменна — это нарезанное соломкой мясо, картофель и томатный соус.",
             "image": "https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg",
             "price": 270,
             "ingredients": [
                 "Говядина",
                 "Соленые огурцы",
                 "Картофель",
                 "Мясной бульон",
                 "Чеснок"
             ]
         },
         {
             "id": "b7k2U13fd",
             "name": "Жареный рис с яйцом по‑китайски",
             "description": "Жареный рис — довольно распространенный ингредиент блюд восточноазиатской кухни — готовить, в сущности, можно из остатков вчерашнего ужина. Только хорошо остывший, заранее сваренный рис, в идеале простоявший всю ночь в холодильнике, при попадании в раскаленный вок не расползется до состояния каши и не превратит содержимое сковородки в неповоротливый бесформенный ком.",
             "image": "https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg",
             "price": 240,
             "ingredients": [
                 "Круглый рис",
                 "Мини цукини",
                 "Тертый имбирь",
                 "Грибы шиитаке",
                 "Соевый соус",
                 "Кунжутное масло"
             ]
         }
     ]
 const menu = document.querySelector(".menu");

 arr.forEach(item => {
     const menuItem = document.createElement("li");
     menuItem.classList.add("menu__item");

     const image = document.createElement("img");
     image.src = item.image;
     image.alt = item.name;
     image.classList.add("card__image");
     menuItem.appendChild(image);

     const cardContent = document.createElement("div");
     cardContent.classList.add("card__content");
     menuItem.appendChild(cardContent);

     const itemName = document.createElement("h2");
     itemName.classList.add("card__name");
     itemName.textContent = item.name;
     cardContent.appendChild(itemName);

     const itemDescription = document.createElement("p");
     itemDescription.classList.add("card__description");
     itemDescription.textContent = item.description;
     cardContent.appendChild(itemDescription);

     const itemPrice = document.createElement("p");
     itemPrice.classList.add("card__price");
     itemPrice.textContent = `Price: $${item.price}`;
     cardContent.appendChild(itemPrice);

     const itemIngredients = document.createElement("ul");
     itemIngredients.classList.add("card__ingredients");
     item.ingredients.forEach(ingredient => {
         const ingredientItem = document.createElement("li");
         ingredientItem.textContent = ingredient;
         itemIngredients.appendChild(ingredientItem);
     });
     cardContent.appendChild(itemIngredients);

     menu.appendChild(menuItem);
 });

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const body = document.querySelector('body')
const themeSwitchToggle = document.getElementById('#theme-switch-toggle')

themeSwitchToggle.addEventListener("change", (event) => {
    const checkTheme = themeSwitchToggle.checked;
    if (themeSwitchToggle.checked) {
        changeTheme(Theme.DARK)
    } else {
        changeTheme(Theme.LIGHT)
    }
    checkTheme()
});


function changeTheme (theme) {
    // body.classList.remove(Theme.LIGHT, Theme.DARK);
    body.classList.toggle(theme.DARK);
    body.classList.toggle(theme.LIGHT);
    // body.classList.add(Theme)

    localStorage.setItem('theme', theme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === theme.DARK) {
        changeTheme(Theme.DARK);
        themeSwitchToggle.checked = true;
    } else {
        changeTheme(Theme.LIGHT);
    }
}

loadTheme();

 // const themeSwitch = document.querySelector('.theme-switch');
 // const body = document.body;
 //
 // themeSwitch.addEventListener('change', () => {
 //     if (themeSwitch.checked) {
 //         body.classList.remove('light-theme');
 //         body.classList.add('dark-theme');
 //     } else {
 //         body.classList.remove('dark-theme');
 //         body.classList.add('light-theme');
 //     }
 // });





