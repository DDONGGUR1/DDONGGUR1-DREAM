// 화면 요소 연결
const list = document.getElementById("character-list");
const card = document.getElementById("profile-card");
const portrait = document.getElementById("portrait");
const nameDisplay = document.getElementById("profile-name");
const ageDisplay = document.getElementById("profile-age");
const introDisplay = document.getElementById("profile-intro");

// 현재 선택된 캐릭터 ID
let selectedId = characters[0]?.id ?? null;

/* 캐릭터 목록 생성 및 클릭 이벤트 설정 */
function renderList() {
    list.replaceChildren();

    // 캐릭터별 선택 버튼 생성
    characters.forEach((character, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "character-button";
        button.textContent = `${index + 1}. ${character.name}`;
        button.classList.toggle("active", character.id === selectedId);

        // 버튼을 누르면 해당 캐릭터를 선택
        button.addEventListener("click", () => {
            selectedId = character.id;
            renderProfile();
        });

        list.appendChild(button);
    });
}

/* 선택된 캐릭터의 프로필 표시 */
function renderProfile() {
    const character = characters.find(item => item.id === selectedId);

    renderList();
    portrait.replaceChildren();

    // 선택된 캐릭터가 없을 때의 표시
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
    introDisplay.textContent = character.intro || "짧은 설명이 등록되지 않았습니다.";


            // 초상화 이미지 생성 및 로드 실패 처리
            if (character.photo) {
                const image = document.createElement("img");
                image.src = character.photo;
                image.alt = `${character.name}의 초상화`;

                image.addEventListener("error", () => {
                    portraitFrame.replaceChildren();

                    const placeholder = document.createElement("div");
                    placeholder.className = "portrait-placeholder";
                    placeholder.textContent = "IMAGE NOT FOUND";

                    portraitFrame.appendChild(placeholder);
                });

                portraitFrame.replaceChildren(image);
            }
        } else {
            // 해당 ID의 캐릭터가 없을 때 안내 표시
            nameElement.textContent = "캐릭터를 찾을 수 없습니다.";
            ageElement.textContent = "";
            standElement.textContent = "";
            introElement.textContent = "";
            descriptionElement.textContent =
                "목록 페이지에서 캐릭터를 선택해 다시 들어와 주세요.";
        }

    }
}

/* 프로필 카드를 누르면 상세 페이지로 이동 */
card.addEventListener("click", () => {
    if (!selectedId) return;
    window.location.href = `detail.html?id=${encodeURIComponent(selectedId)}`;
});

// 최초 화면 표시
renderProfile();
renderProfile();
