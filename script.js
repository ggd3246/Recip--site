const buttons = document.querySelectorAll(".card button"); // Получаем кнопки
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalText = document.getElementById("modal-text");
const closeModal = document.querySelector(".close");

// Данные для каждого блюда
const recipes = [
    {
        title: "Борщ",
        image: "imagel/3.jpg",
        text: "Сначала варим бульон, в кастрюлю наливаем 1,5-2 литра воды. Добавляем мясо и ставим на средний огонь. Перед закипанием снимаем пенку и добавляем лук и морковь. Варим до готовности мяса, затем добавляем свёклу, капусту, картофель и специи."
    },
    {
        title: "Овощной салат",
        image: "imagel/1.jpg",
        text: "Для приготовления овощного салата нарежьте огурцы, помидоры, сладкий перец и зелень. Добавьте оливковое масло, соль и перец по вкусу. Хорошо перемешайте и подавайте на стол."
    },
    {
        title: "Жаркое по-деревенски",
        image: "imagel/5.jpg",
        text: "Свиная корейка нарезается на куски и обжаривается до золотистой корочки. Затем добавляется картофель, лук и морковь. Всё тушится на медленном огне с добавлением специй и зелени."
    },
    {
        title: "Сэндвич",
        image: "imagel/2.jpg",
        text: "Обжарьте ломтики хлеба на сковороде. Выложите на них сыр, ветчину, листья салата и помидоры. Накройте вторым ломтиком хлеба и наслаждайтесь вкусным завтраком!"
    }
];

// Добавляем обработчик клика для каждой кнопки
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        modalTitle.textContent = recipes[index].title; // Устанавливаем заголовок
        modalImage.src = recipes[index].image; // Устанавливаем картинку
        modalText.textContent = recipes[index].text; // Устанавливаем текст рецепта
        modal.style.display = "flex"; // Показываем окно
    });
});

// Закрытие окна при нажатии на крестик
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Закрытие при клике вне окна
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
