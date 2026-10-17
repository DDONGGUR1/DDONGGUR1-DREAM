const list = document.getElementById("character-list");
const card = document.getElementById("profile-card");
const portrait = document.getElementById("portrait");
const nameDisplay = document.getElementById("profile-name");
const ageDisplay = document.getElementById("profile-age");
const introDisplay = document.getElementById("profile-intro");

let selectedId = characters[0]?.id ?? null;

function renderList() {
    list.replaceChildren();

    characters.forEach((character, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "character-button";
        button.textContent = `${index + 1}. ${character.name}`;
        button.classList.toggle("active", character.id === selectedId);

        button.addEventListener("click", () => {
            selectedId = character.id;
            renderProfile();
        });

        list.appendChild(button);
    });
}

function renderProfile() {
    const character = characters.find(item => item.id === selectedId);
    renderList();
    portrait.replaceChildren();

    if (!character) {
        nameDisplay.textContent = "등록된 캐릭터가 없습니다.";
        ageDisplay.textContent = "";
        introDisplay.textContent = "";
        portrait.textContent = "NO CHARACTER";
        card.disabled = true;
        return;
    }

    card.disabled = false;
    nameDisplay.textContent = character.name;
    ageDisplay.textContent = character.age || "나이 미등록";
    introDisplay.textContent = character.intro || "소개가 등록되지 않았습니다.";

    if (character.photo) {
        const image = document.createElement("img");
        image.src = character.photo;
        image.alt = `${character.name}의 사진`;

        image.addEventListener("error", () => {
            portrait.replaceChildren();
            portrait.textContent = "IMAGE NOT FOUND";
        });

        portrait.appendChild(image);
    } else {
        portrait.textContent = "PORTRAIT";
    }
}

card.addEventListener("click", () => {
    if (!selectedId) return;
    window.location.href = `detail.html?id=${encodeURIComponent(selectedId)}`;
});

renderProfile();
