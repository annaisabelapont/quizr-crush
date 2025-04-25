// import getResult from "./getResult";

const personName = localStorage.getItem('personName');

if (personName) {
  document.getElementById('person-name').innerText = personName.toUpperCase();
}

else {
  document.getElementById('person-name').innerText = 'FULANO';
}

// 

function getResult(personName) {
  switch(personName.toLowerCase()) {
    case 'anna isabela':
    case 'annisabolas':
      return {
        love: 'Elefante do PHP',
        imgSrc: 'elefantePHP.png'
      };

    case 'dhuli':
      return {
        love: 'Cachorrinho da figurinha',
        imgSrc: 'cachorrinhoFig.png'
      };

    case 'giovanna':
    case 'giovanna rodrigues':
      return {
        love: 'Bonnie',
        imgSrc: 'bonnie.png'
      };

    case 'karan':
    case 'professor karan':
    case 'karan luciano':
      return {
        love: 'Shrek jogador',
        imgSrc: 'shrek.png'
      };

    case 'emanueli':
    case 'manu':
      return {
        love: 'Charles Leclerc',
        imgSrc: 'charlesLeclerc.png'
      };

    case 'luiza':
    case 'maria luiza':
    case 'luiza souza':
      return {
        love: 'Patriota',
        imgSrc: 'patriota.png'
      };

    case 'lucas':
    case 'lucas oliveira':
      return {
        love: 'Nikolas Ferreira',
        imgSrc: 'nikolasFerreira.png'
      };

    case 'luis miguel':
    case 'luis':
      return {
        love: 'Pabllo Vittar',
        imgSrc: 'pablloVittar.png'
      };

    case 'giovana':
    case 'giovana santana':
      return {
        love: 'Jimin',
        imgSrc: 'jimin.png'
      };

    case 'mariana':
    case 'mariana da luz':
      return {
        love: 'Padre Kelmon',
        imgSrc: 'padreKelmon.png'
      };

    default:
      return {
        love: 'Tralalelo Tralala',
        imgSrc: 'tralaleloTralala.png'
      };
  }
}

const result = getResult(personName);
document.getElementById('love-name').innerText = result.love;
document.getElementById('love-photo').src = `../img/${result.imgSrc}`;

// 

const buttonRemake = document.getElementById('remake-test');

buttonRemake.addEventListener('click', () => {
  localStorage.clear();
})
