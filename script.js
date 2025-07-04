const states = [
  { name: "Baden-Württemberg", code: "BW" },
  { name: "Bayern", code: "BY" },
  { name: "Berlin", code: "BE" },
  { name: "Brandenburg", code: "BB" },
  { name: "Bremen", code: "HB" },
  { name: "Hamburg", code: "HH" },
  { name: "Hessen", code: "HE" },
  { name: "Mecklenburg-Vorpommern", code: "MV" },
  { name: "Niedersachsen", code: "NI" },
  { name: "Nordrhein-Westfalen", code: "NW" },
  { name: "Rheinland-Pfalz", code: "RP" },
  { name: "Saarland", code: "SL" },
  { name: "Sachsen", code: "SN" },
  { name: "Sachsen-Anhalt", code: "ST" },
  { name: "Schleswig-Holstein", code: "SH" },
  { name: "Thüringen", code: "TH" }
];

async function loadData() {
  const response = await fetch('data.json');
  const data = await response.json();
  renderStates(data);
}

function renderStates(data) {
  const container = document.getElementById("states");
  states.forEach(s => {
    const btn = document.createElement("div");
    btn.className = "flag-button";
    btn.innerHTML = `<span>Abgeordnete aus ${s.name}</span>`;
    btn.onclick = () => selectState(data, s.code);
    container.appendChild(btn);
  });
}

function selectState(data, code) {
  const list = data[code] || [];
  const random = list.sort(() => 0.5 - Math.random()).slice(0, 5);
  const contacts = document.getElementById("contacts");
  contacts.innerHTML = "<h3>Kontakte</h3>";
  random.forEach(p => {
    contacts.innerHTML += `
      <div class='contact-card'>
        <p>${p.title} ${p.lastName}</p>
        <p><a href='mailto:${p.email}?subject=Rücküberstellung%20Maja%20T.&body=${p.mailText}'>${p.email}</a></p>
        <p><a href='tel:${p.phone}'>${p.phone}</a></p>
      </div>
    `;
  });
}

function showMore() {
  alert("Hier werden weitere 10 Verantwortliche + Postanschriften angezeigt (Implementierung folgt).“);
}

loadData();
