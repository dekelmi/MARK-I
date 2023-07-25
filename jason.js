const readline = require("readline");
const personalAnswer = require("./personal_modules/personalAnswer");
const database = require('./personal_modules/database');
const apiwork = require('./personal_modules/apiwork');

let rl = readline.createInterface(process.stdin, process.stdout);
console.log("Доброго времени суток.\n\nЯ 'Jason' - интерактивный хелпер разработанный на 'Node.js'\nВведите 'help' чтобы открыть список доступных вопросов\nСоздатель:'Kelmi'")

    const aboutProgramm = {
        'Что ты такое?': 'В двух словах, я - последовательность нулей и единиц. Развернуто, я представляю собой код, который построчно интерпретируется в машинный код, понимаемый вашим компьютером, и, более точно, вашим процессором.',
        'Кто ты?': 'Говоря кратко, я представляю собой строки из нулей и единиц.\nЕсли отвечать более развёрнуто, то я код, который построчно интерпретируется в машинный код который понимает ваш компьютер, а точнее процессор в ней.',
        'Кто ты такой?': 'Кратко говоря, я - набор нулей и единиц. Развернуто, я представляю собой код, который построчно интерпретируется в машинный код, который понимает ваш компьютер, а именно процессор.',
        'Кто твой создатель?': 'Псевдоним моего создателя "Kelmi"',
        'Кто тебя создал?': 'Никнейм моего создателя "Kelmi"',
        'Как мне связаться с твоим создателем?': 'Ссылка на VK профиль: "vk.com/Kelmicode"',
        'Как мне связаться с создателем?': 'Ссылка на VK профиль: "vk.com/Kelmicode"',
        'Как я могу связаться с твоим создателем?': 'Ссылка на VK профиль: "vk.com/Kelmicode"',
        'Как я могу связаться с создателем?': 'Ссылка на VK профиль: "vk.com/Kelmicode"'
    }
    const databasequery = {
        'Что такое JavaScript?': 'SELECT answer FROM questions WHERE id = 1',
        'Какие основные принципы программирования?': 'SELECT answer FROM questions WHERE id = 2',
        'Какие бывают типы данных в JavaScript?': 'SELECT answer FROM questions WHERE id = 3',
        'Как работать с массивами в JavaScript?': 'SELECT answer FROM questions WHERE id = 4',
        'Как использовать условные операторы в JavaScript?': 'SELECT answer FROM questions WHERE id = 5',
        'Какова средняя скорость звука?': 'SELECT answer FROM questions WHERE id = 6',
        'Какая столица Японии?': 'SELECT answer FROM questions WHERE id = 7',
        'Что такое экологический след?': 'SELECT answer FROM questions WHERE id = 8',
        'Какие бывают виды облаков?': 'SELECT answer FROM questions WHERE id = 9',
        'Как правильно составить резюме?': 'SELECT answer FROM questions WHERE id = 10',
        'Какие факторы влияют на изменение климата?': 'SELECT answer FROM questions WHERE id = 11',
        'Какие технологии используются для создания виртуальной реальности?': 'SELECT answer FROM questions WHERE id = 12',
        'Какие существуют методы шифрования данных?': 'SELECT answer FROM questions WHERE id = 13',
        'Как работает алгоритм поиска в ширину (BFS)?': 'SELECT answer FROM questions WHERE id = 14',
        'Чем отличается TCP от UDP протокола?': 'SELECT answer FROM questions WHERE id = 15',
        'Как устроены компьютерные сети и как они функционируют?': 'SELECT answer FROM questions WHERE id = 16',
        'Какие типы программного обеспечения бывают и для чего они используются?': 'SELECT answer FROM questions WHERE id = 17',
        'Каким образом происходит аутентификация пользователя в системе?': 'SELECT answer FROM questions WHERE id = 18',
        'Какие основные принципы работы Интернета?': 'SELECT answer FROM questions WHERE id = 19',
        'Какие существуют алгоритмы сортировки и какова их сложность?': 'SELECT answer FROM questions WHERE id = 20',
        'Что такое искусственный интеллект и как он применяется в реальной жизни?': 'SELECT answer FROM questions WHERE id = 21',
        'Какие популярные фреймворки используются для веб-разработки?': 'SELECT answer FROM questions WHERE id = 22',
        'Как устроены базы данных и как они организуют хранение информации?': 'SELECT answer FROM questions WHERE id = 23',
        'Что такое алгоритмы машинного обучения и как они обрабатывают данные?': 'SELECT answer FROM questions WHERE id = 24',
        'Какие существуют методы оптимизации кода и как они помогают улучшить производительность программ?': 'SELECT answer FROM questions WHERE id = 25',
        'Какие существуют методы аутентификации пользователей в веб-приложениях?': 'SELECT answer FROM questions WHERE id = 26',
        'Что такое реляционные базы данных и в чем их преимущества?': 'SELECT answer FROM questions WHERE id = 27',
        'Какие бывают типы данных в языке программирования JavaScript?': 'SELECT answer FROM questions WHERE id = 28',
        'Как работает алгоритм поиска в глубину (DFS) и для чего он используется?': 'SELECT answer FROM questions WHERE id = 29',
        'Что такое RESTful API и как оно используется для взаимодействия с сервером?': 'SELECT answer FROM questions WHERE id = 30',
        'Какие паттерны проектирования программного обеспечения существуют и как их применять?': 'SELECT answer FROM questions WHERE id = 31',
        'Какие существуют методы тестирования программного обеспечения?': 'SELECT answer FROM questions WHERE id = 32',
        'Как устроены и как работают блокчейн и криптовалюты?': 'SELECT answer FROM questions WHERE id = 33',
        'Что такое облачные вычисления и какие облачные сервисы существуют?': 'SELECT answer FROM questions WHERE id = 34',
        'Какие существуют алгоритмы для поиска кратчайшего пути в графах?': 'SELECT answer FROM questions WHERE id = 35',
        'Какие популярные инструменты для управления версиями кода используются разработчиками?': 'SELECT answer FROM questions WHERE id = 36',
        'Что такое DevOps и как он улучшает процесс разработки программного обеспечения?': 'SELECT answer FROM questions WHERE id = 37',
        'Какие бывают типы HTTP-запросов и как они взаимодействуют с веб-сервером?': 'SELECT answer FROM questions WHERE id = 38',
        'Как устроены операционные системы и как они управляют аппаратными ресурсами компьютера?': 'SELECT answer FROM questions WHERE id = 39',
        'Что такое асинхронное программирование и как его применять в JavaScript?': 'SELECT answer FROM questions WHERE id = 40',
        'Как устроены компиляторы и интерпретаторы, и как они обрабатывают исходный код программы?': 'SELECT answer FROM questions WHERE id = 41',
        'Что такое NoSQL базы данных и для каких задач они подходят лучше всего?': 'SELECT answer FROM questions WHERE id = 42',
        'Как работает алгоритм шифрования RSA и как он обеспечивает безопасность данных?': 'SELECT answer FROM questions WHERE id = 43',
        'Что такое архитектурный шаблон MVC и как он используется в веб-разработке?': 'SELECT answer FROM questions WHERE id = 44',
        'Как устроены и как работают сенсорные экраны в современных устройствах?': 'SELECT answer FROM questions WHERE id = 45',
        'Какие языки программирования наиболее популярны и используются в разных областях разработки?': 'SELECT answer FROM questions WHERE id = 46',
        'Как работает цикл в программировании и для чего его применяют?': 'SELECT answer FROM questions WHERE id = 47',
        'Какие паттерны проектирования существуют и для чего они используются в разработке ПО?': 'SELECT answer FROM questions WHERE id = 48',
        'Что такое объектно-ориентированное программирование и какие принципы оно предполагает?': 'SELECT answer FROM questions WHERE id = 49',
        'Какие существуют архитектурные стили и принципы разработки программного обеспечения?': 'SELECT answer FROM questions WHERE id = 50',
        'Как работает система контроля версий, например, Git, и зачем она нужна разработчикам?': 'SELECT answer FROM questions WHERE id = 51',
        'Какие существуют типы ошибок в программировании и как их эффективно отлавливать и исправлять?': 'SELECT answer FROM questions WHERE id = 52',
        'Что такое API и для чего он используется?': 'SELECT answer FROM questions WHERE id = 53',
        'Как работает сетевое программирование и какие протоколы используются для обмена данными?': 'SELECT answer FROM questions WHERE id = 54',
        'Что такое многопоточность и как она применяется в параллельном программировании?': 'SELECT answer FROM questions WHERE id = 55',
        'Какие существуют типы тестирования программного обеспечения и почему они важны?': 'SELECT answer FROM questions WHERE id = 56',
        'Что такое версионирование программного обеспечения и как управлять релизами?': 'SELECT answer FROM questions WHERE id = 57',
        'Что такое стек вызовов (call stack) и как он работает в процессе выполнения кода?': 'SELECT answer FROM questions WHERE id = 58',
        'Какие существуют типы данных для представления чисел в программировании и какие операции можно выполнять с числами?': 'SELECT answer FROM questions WHERE id = 59',
        'Что такое рекурсия и в каких случаях она может быть полезной при написании кода?': 'SELECT answer FROM questions WHERE id = 60',
        'Как работает управление памятью в различных языках программирования?': 'SELECT answer FROM questions WHERE id = 61',
        'Что такое исключения (exceptions) и как они обрабатываются в коде?': 'SELECT answer FROM questions WHERE id = 62',
        'Какие существуют алгоритмы сортировки массивов и какой из них является наиболее эффективным?': 'SELECT answer FROM questions WHERE id = 63',
        'Что такое ссылочные и значимые типы данных и как они различаются?': 'SELECT answer FROM questions WHERE id = 64',
        'Как работает наследование и полиморфизм в объектно-ориентированном программировании?': 'SELECT answer FROM questions WHERE id = 65',
        'Что такое асинхронное программирование и зачем оно используется в современных веб-приложениях?': 'SELECT answer FROM questions WHERE id = 66',
        'Какие существуют типы баз данных и в каких случаях выбирать каждый из них?': 'SELECT answer FROM questions WHERE id = 67',
        'Как происходит компиляция и интерпретация программного кода?': 'SELECT answer FROM questions WHERE id = 68',
        'Что такое лямбда-функции и как они используются в функциональном программировании?': 'SELECT answer FROM questions WHERE id = 69',
        'Как работает система пакетного менеджера, например, npm для Node.js?': 'SELECT answer FROM questions WHERE id = 70',
        'Что такое локализация и интернационализация программного обеспечения?': 'SELECT answer FROM questions WHERE id = 71',
        'Какие существуют методы оптимизации кода для улучшения производительности приложений?': 'SELECT answer FROM questions WHERE id = 72',
        'Что такое многопоточность и как избежать гонок данных в параллельном программировании?': 'SELECT answer FROM questions WHERE id = 73',
        'Какие инструменты для отладки и профилирования кода существуют для различных языков программирования?': 'SELECT answer FROM questions WHERE id = 74',
        'Что такое архитектура RESTful и как она применяется в разработке веб-сервисов?': 'SELECT answer FROM questions WHERE id = 75',
        'Как работает виртуализация и контейнеризация, и какие преимущества они предоставляют?': 'SELECT answer FROM questions WHERE id = 76',
        'Что такое кодовые ревью (code reviews) и как они помогают повышать качество программного обеспечения?': 'SELECT answer FROM questions WHERE id = 77',
    }

function newQuestion() {
    rl.question("\n\nЗадайте вопрос, и я постараюсь ответить на него:\n", function(answer) {
        if (aboutProgramm.hasOwnProperty(answer)) {
            console.log(aboutProgramm[answer])
            newQuestion()
        }
        else if (answer === 'Как дела?') {
            var randomMath = Math.random()

            if (randomMath > 0.6) {
                console.log('Всё отлично, как у Вас?')
                personalAnswer(rl, newQuestion)
            }
            else if (randomMath > 0.3) {
                console.log('Всё замечательно, как дела у Вас?')
                personalAnswer(rl, newQuestion)
            }
            else {
                console.log('У меня всё хорошо, а у Вас?')
                personalAnswer(rl, newQuestion)
            } 
            newQuestion()
        }
        else if (answer === 'Где расположен твой код?' || answer === 'Где можно посмотреть твой код?') {
            console.log('Ссылка на GitHub репозиторий где распологается код: "https://github.com/Kelmicode/Jason"')
            newQuestion()
        }
        else if (answer === 'help') {
            console.log(
                'Поддерживаемые вопросы:\n',
                '"Что ты такое?" && "Кто ты?" && "Кто ты такой?"\n',
                '"Как дела?"\n',
                '"Кто твой создатель?"\n',
                '"Где расположен твой код?" && "Где можно посмотреть твой код?"'
                )
            newQuestion()
        }
        else if (databasequery.hasOwnProperty(answer)) {
            database(databasequery[answer])
            setTimeout(() => {
                newQuestion()
            }, 2000);
        }
        else {
            console.log('Такой вопрос не поддерживается :(')
            newQuestion()
        }







    
})}

newQuestion()