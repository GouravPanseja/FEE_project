const botIcon = document.getElementById('bot-icon');
const bot =document.getElementById('bot');
const botCross =document.getElementById('bot-x-mark');


botIcon.addEventListener('click',()=>{
    console.log('bot-icon clicked');
    bot.classList.toggle('hidden');
    botIcon.classList.toggle('hidden');

})

botCross.addEventListener('click',()=>{
    bot.classList.toggle('hidden')
    botIcon.classList.toggle('hidden')
})

