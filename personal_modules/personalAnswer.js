module.exports = function personalAnswer(rl, newQuestion) {
    rl.question('Ваш ответ: ', function(answer) {
        var responce = answer

        if (responce === 'Хорошо' || responce === 'Отлично' || responce === 'Здорово' || responce === 'Нормально') {
            console.log('Рад за Вас');
            newQuestion();
        } else if (responce === 'Плохо' || responce === 'Так себе') {
            console.log('Надеюсь, в скором времени всё наладится');
            newQuestion();
        } else {
            console.log('Не совсем понял Вас, повторите ввод');
            personalAnswer(rl, newQuestion);
        }
    });
};