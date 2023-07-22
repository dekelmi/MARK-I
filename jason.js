const readline = require("readline");
const personalAnswer = require("./personal_modules/personalAnswer");

let rl = readline.createInterface(process.stdin, process.stdout);
console.log("Доброго времени суток.\n\nЯ 'Jason' - интерактивный хелпер разработанный на 'Node.js'\nВведите 'help' чтобы открыть список доступных вопросов\nСоздатель:'Kelmi'")
    const aboutProgramm = {
        'Что ты такое?': 'В двух словах, я - последовательность нулей и единиц. Развернуто, я представляю собой код, который построчно интерпретируется в машинный код, понимаемый вашим компьютером, и, более точно, вашим процессором.',
        'Кто ты?': 'Говоря кратко, я представляю собой строки из нулей и единиц.\nЕсли отвечать более развёрнуто, то я код, который построчно интерпретируется в машинный код который понимает ваш компьютер, а точнее процессор в ней.',
        'Кто ты такой?': 'Кратко говоря, я - набор нулей и единиц. Развернуто, я представляю собой код, который построчно интерпретируется в машинный код, который понимает ваш компьютер, а именно процессор.'
    }
    const aboutCreator = {
        'Кто твой создатель?': 'Псевдоним моего создателя "Kelmi"',
        'Кто тебя создал?': 'Никнейм моего создателя "Kelmi"',
        'Как мне связаться с твоим создателем?': 'Ссылка на VK профиль: "vk.com/Kelmicode"',
        'Как мне связаться с создателем?': 'Ссылка на VK профиль: "vk.com/Kelmicode"',
        'Как я могу связаться с твоим создателем?': 'Ссылка на VK профиль: "vk.com/Kelmicode"',
        'Как я могу связаться с создателем?': 'Ссылка на VK профиль: "vk.com/Kelmicode"'
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
        else if (aboutCreator.hasOwnProperty(answer)) {
            console.log(aboutCreator[answer])
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
        else {
            console.log('Такой вопрос не поддерживается :(')
            newQuestion()
        }







    
})}

newQuestion()