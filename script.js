/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. done
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto done
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe */

let employees = [
    employee1 = {
        firstName: 'Wayne Barnett',
        role: 'Founder & CEO',
        image:'wayne-barnett-founder-ceo.jpg'
    },
    employee2 = {
        firstName:'Angela Caroll',
        role:' Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    employee3 = {
        firstName: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    employee4 = {
        firstName: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    employee5 = {
        firstName: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    employee6 = {
        firstName: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]

for (let i = 0; i < employees.length; i++) {
    let employee = employees[i];

    let card = document.createElement('div');
    card.classList.add('card')

    let imgDiv = document.createElement('div');
    imgDiv.innerHTML = `<img src="img/${employee.image}" alt="">`


    let cardInfo = document.createElement('div');
    cardInfo.classList.add('padding', 'card-info')


    let nameElement = document.createElement('h3');
    nameElement.textContent = employee.firstName;

    let roleElement = document.createElement('p');
    roleElement.textContent = employee.role;

    cardInfo.appendChild(nameElement);
    cardInfo.appendChild(roleElement);

    card.appendChild(imgDiv);
    card.appendChild(cardInfo);

    let container = document.getElementById('container');

    container.appendChild(card);
}


