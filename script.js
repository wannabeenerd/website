const states = [
  { name: "Nordrhein-Westfalen", code: "NRW" },
  { name: "Bayern", code: "BY" }
  // weitere Bundesländer hier
];

const data = {
  NRW: [
    { name: "Herr Muster", email: "muster@bundestag.de", phone: "+49123456789" },
    // weitere Abgeordnete
  ],
  BY: [
    { name: "Frau Beispiel", email: "beispiel@bundestag.de", phone: "+49876543210" },
    // weitere Abgeordnete
  ]
};

function renderStates() {
  const container = document.getElementById("states");
  states.forEach(s => {
    const btn = document.createElement("div");
    btn.className = "flag-button";
    btn.innerHTML = `<span>Abgeordnete aus ${s.name}</span>`;
    btn.onclick = () => selectState(s.code);
    container.appendChild(btn);
  });
}

function selectState(code) {
  const list = data[code];
  const random = list.sort(() => 0.5 - Math.random()).slice(0, 5);
  const contacts = document.getElementById("contacts");
  contacts.innerHTML = "<h3>Kontakte</h3>";
  random.forEach(p => {
    contacts.innerHTML += `
      <div class='contact-card'>
        <p>${p.name}</p>
        <p><a href='mailto:${p.email}?subject=Rücküberstellung%20Maja%20T.&body=Sehr%20geehrte/r%20${p.name},%0D%0A%0D%0A[Hier%20steht%20der%20Mailtext%20aus%20der%20Vorlage]'>${p.email}</a></p>
        <p><a href='tel:${p.phone}'>${p.phone}</a></p>
      </div>
    `;
  });
}

function showMore() {
  alert("Weitere Optionen werden hier angezeigt.");
}

renderStates();
