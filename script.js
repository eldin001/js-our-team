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
for(let i = 0; i < employees.length; i++) {
    console.log(employees[i].firstName, employees[i].role, employees[i].image);
    let liItem = document.createElement('li');
    liItem.innerHTML = `Nome: ${employees[i].firstName} <br>
    Ruolo: ${employees[i].role}<br>
    Immagine: <img src="img/${employees[i].image}" alt=""> `
    let ulElement = document.getElementById('ul');
    ulElement.appendChild(liItem);
    
}

/* for (let info of employees) {
    console.log(info.firstName, info.role, info.image);
    let cardEl = document.getElementById('card');
    cardEl.innerHTML += info.firstName;
}
 */
