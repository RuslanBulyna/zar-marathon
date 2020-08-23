const btnNewGame = document.getElementById('btn-new-game');
const btnKickCharacter = document.getElementById('btn-kick-pokemon1');
const btnKickEnemy = document.getElementById('btn-kick-pokemon2');
const btnHealCharacter = document.getElementById('btn-heal-pokemon1');
const btnHealEnemy = document.getElementById('btn-heal-pokemon2');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    elKickBtn: btnKickCharacter,
    elHealBtn: btnHealCharacter,
    healDefaultCount: 3,
    healDamageHPCount: 3
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    elKickBtn: btnKickEnemy,
    elHealBtn: btnHealEnemy,
    healDefaultCount: 3,
    healDamageHPCount: 3
}

btnNewGame.addEventListener('click', function(){
    initGame();
});

btnKickCharacter.addEventListener('click', function(){
    changeHP(random(10), enemy);
});

btnKickEnemy.addEventListener('click', function(){
    changeHP(random(10), character);
});

btnHealCharacter.addEventListener('click', function(){
    healHP(character, btnHealCharacter);
});

btnHealEnemy.addEventListener('click', function(){
    healHP(enemy, btnHealEnemy);
});

function renderHP(person){
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
    person.elProgressbar.style.width = person.damageHP + '%';
}

function renderHealCount(person, btn){
    btn.innerText = `Полечить (${person.healDamageHPCount})`;
}

function changeHP(count, person){
    if(person.damageHP < count){
        person.damageHP = 0;
        alert(`К сожалению ${person.name} проиграл!`)
        person.elKickBtn.disabled = true;
        person.elHealBtn.disabled = true;
    } else {
        person.damageHP -= count;   
    }
    renderHP(person);
    
}

function healHP(person, btn){
    if(person.healDamageHPCount !== 0 && (person.defaultHP - person.damageHP) >= 10) {
        person.damageHP += 10;
        person.healDamageHPCount--;
    } else {
        person.elHealBtn.disabled = true;
    }
    renderHealCount(person, btn);
    renderHP(person);
}

function random(num){
    return Math.ceil(Math.random() * num);
}

function newGame(person){
    person.damageHP = person.defaultHP;
    person.healDamageHPCount = person.healDefaultCount;
}

function initGame(){
    console.log('Start Game');
    newGame(character);
    newGame(enemy);
    renderHP(character);
    renderHP(enemy);
    renderHealCount(character, btnHealCharacter);
    renderHealCount(character, btnHealEnemy);
}

initGame();