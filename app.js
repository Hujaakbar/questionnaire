questions = [
    '質問を聞いてもよろしいですか?',
    'あなたが本当に可愛いだとおもいます。</br>彼氏がいないなら、コヒーデートに行きませんか？',
    'ありがとう。</br>デートの日時を決めるために、インスタかラインを交換しましうか',
    'ありがとう</br>ございます。',
];

rejectionReply = '承知しました。</br>ご回答</br>ありがとうございます。';
document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.querySelector('div.question p');
    const yesButton = document.querySelector('button.yes');
    const noButton = document.querySelector('button.no');
    questionIndex = 0;
    questionElement.innerHTML = questions[questionIndex];
    yesButton.addEventListener('click', () => {
        questionIndex += 1;
        if (questions.length === questionIndex + 1) {
            noButton.style.display = 'none';
            yesButton.style.display = 'none';
        }
        questionElement.innerHTML = questions[questionIndex];
    });
    // got rejected
    noButton.addEventListener('click', () => {
        questionElement.innerHTML = rejectionReply;
        noButton.style.display = 'none';
        yesButton.style.display = 'none';
    });
});
