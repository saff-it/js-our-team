
const peopleArray = [
    {
        nome : 'Wayne Barnett',
        mansione : 'Founder & CEO',
        image : 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome : 'Angela Caroll',
        mansione : 'Chief Editor',
        image : 'angela-caroll-chief-editor.jpg',
    },
    {
        nome : 'Walter Gordon',
        mansione : 'Office Manager',
        image : 'walter-gordon-office-manager.jpg',
    },
    {
        nome : 'Angela Lopez',
        mansione : 'Social Media Manager',
        image : 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome : 'Scott Estrada',
        mansione : 'Developer',
        image : 'scott-estrada-developer.jpg',
    },
    {
        nome : 'Barbara Ramos',
        mansione : 'Graphic Designer',
        image : 'barbara-ramos-graphic-designer.jpg',
    },

];

for (let key in peopleArray) {
    console.log(peopleArray[key]);
}

for ( let i = 0; i < peopleArray.length; i++){
    console.log(`${peopleArray[i].nome} ${peopleArray[i].mansione} ${peopleArray[i].image}`);
}
