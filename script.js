
const peopleArray = [
    {
        nome : 'Wayne Barnett',
        mansione : 'Founder & CEO',
        image : '../img/wayne-barnett-founder-ceo.jpg',
    },
    {
        nome : 'Angela Caroll',
        mansione : 'Chief Editor',
        image : '../img/angela-caroll-chief-editor.jpg',
    },
    {
        nome : 'Walter Gordon',
        mansione : 'Office Manager',
        image : '../img/walter-gordon-office-manager.jpg',
    },
    {
        nome : 'Angela Lopez',
        mansione : 'Social Media Manager',
        image : '../img/angela-lopez-social-media-manager.jpg',
    },
    {
        nome : 'Scott Estrada',
        mansione : 'Developer',
        image : '../img/scott-estrada-developer.jpg',
    },
    {
        nome : 'Barbara Ramos',
        mansione : 'Graphic Designer',
        image : '../img/barbara-ramos-graphic-designer.jpg',
    },

];

// for (let key in peopleArray) {
//     console.log(peopleArray[key]);
// }


const cardWrapper = document.getElementById('row-wrap');

for ( let i = 0; i < peopleArray.length; i++){

    let domCard = document.createElement('div');
    domCard.classList.add('col-4');
    
    domCard.innerHTML = `<div class="card">
        <img src="..." class="card-img-top">
        <div class="card-body">
            <h5 class="card-name">${peopleArray[i].nome}</h5>
            <p class="card-text">${peopleArray[i].mansione}</p>
        </div>
    </div>`;

    const cardImg = document.querySelector('img.card-img-top');
    


    cardWrapper.append(domCard);
    console.log(`${peopleArray[i].nome} ${peopleArray[i].mansione} ${peopleArray[i].image}`);
    

};