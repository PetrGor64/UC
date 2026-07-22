// Все новости
const news = {
    1: {
        title: "Заголовок первой новости",
        date: "22 июля 2026",
        img: "assets/news_img.png",
        text: "Полный текст первой новости. Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст"
    },

    2: {
        title: "Заголовок второй новости",
        date: "21 июля 2026",
        img: "assets/news_img.png",
        text: "Полный текст второй новости. Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст"
    },

    3: {
        title: "Заголовок третьей новости",
        date: "20 июля 2026",
        img: "assets/news_img.png",
        text: "Полный текст третьей новости. Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст"
    },

    4: {
        title: "Заголовок четвертой новости",
        date: "19 июля 2026",
        img: "assets/news_img.png",
        text: "Полный текст четвертой новости. Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст"
    },

    5: {
        title: "Заголовок пятой новости",
        date: "18 июля 2026",
        img: "assets/news_img.png",
        text: "Полный текст пятой новости. Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст"
    },

    6: {
        title: "Заголовок шестой новости",
        date: "17 июля 2026",
        img: "assets/news_img.png",
        text: "Полный текст шестой новости. Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст"
    }
};


// Получаем элементы страницы
const cards = document.querySelectorAll(".news_article_container");

const modal = document.getElementById("newsModal");

const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalText = document.getElementById("modalText");
const modalImg = document.getElementById("modalImg");

const closeBtn = document.querySelector(".close");


// Открытие модального окна
cards.forEach((card) => {

    card.addEventListener("click", () => {

        const id = card.dataset.id;

        // Если новости не существует
        if (!news[id]) return;


        // Заполняем модальное окно
        modalTitle.textContent = news[id].title;
        modalDate.textContent = news[id].date;
        modalText.textContent = news[id].text;
        modalImg.src = news[id].img;
        modalImg.alt = news[id].title;


        // Показываем окно
        modal.style.display = "block";
        document.body.style.overflow = "hidden";

    });

});


// Закрытие по крестику
closeBtn.addEventListener("click", () => {

    modal.style.display = "none";
    // Возвращаем прокрутку страницы
    document.body.style.overflow = "";

});


// Закрытие при клике вне окна
window.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.style.display = "none";
        // Возвращаем прокрутку страницы
        document.body.style.overflow = "";
    }

});

// Функция сокращения текста
function shortText(text, length = 150) {

    if (text.length <= length) {
        return text;
    }

    return text.slice(0, length) + "...";

}


// Заполняем карточки новостей
cards.forEach((card) => {

    const id = card.dataset.id;

    // Если новости не существует
    if (!news[id]) return;


    // Заполняем содержимое карточки
    card.querySelector("time").textContent =
        news[id].date;

    card.querySelector("h4").textContent =
        news[id].title;

    card.querySelector("p").textContent =
        shortText(news[id].text);

});