// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

const cardContainer = document.querySelector(".team-container");

const cards = [
    {
        img: "img/wayne-barnett-founder-ceo.jpg",
        member: {
            memberName: "Wayne Barnett",
            memberRole: "Founder & CEO",
        }
    },
    {
        img: "img/angela-caroll-chief-editor.jpg",
        member: {
            memberName: "Angela Caroli",
            memberRole: "Chief Editor",
        }
    },
    {
        img: "img/walter-gordon-office-manager.jpg",
        member: {
            memberName: "Walter Gordon",
            memberRole: "Office Manager",
        }
    },
    {
        img: "img/angela-lopez-social-media-manager.jpg",
        member: {
            memberName: "Angela Lopez",
            memberRole: "Social Media Manager",
        }
    },
    {
        img: "img/scott-estrada-developer.jpg",
        member: {
            memberName: "Scott Estrada",
            memberRole: "Developer",
        }
    },
    {
        img: "img/barbara-ramos-graphic-designer.jpg",
        member: {
            memberName: "Barbara Ramos",
            memberRole: "Graphic Designer",
        }
    },
];

for (let i = 0; i < cards.length; i++) {
    const card = `
        <div class="team-card">
            <div class="card-image">
                <img src="${cards[i].img}" alt="Wayne Barnett"/>
            </div>
            <div class="card-text">
                <h3>${cards[i].member.memberName}</h3>
                <p>${cards[i].member.memberRole}</p>
            </div>
        </div>
    `;
    cardContainer.innerHTML += card;
}

