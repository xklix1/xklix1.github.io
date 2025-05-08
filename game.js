let soldiers = 0;
const trainButton = document.querySelector('.train-button');
const soldierCount = document.querySelector('.army p');

trainButton.addEventListener('click', () => {
    soldiers += 5;
    soldierCount.textContent = الجنود: ${soldiers};
});
