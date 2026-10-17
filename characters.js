/*
 * 모든 페이지에서 함께 사용하는 캐릭터 정보
 * 사진 경로 예시: "images/dream1.png"
 * stand: 스탠드 이름, intro: 첫 화면에 표시되는 짧은 설명
 * description: 상세 페이지에 표시되는 자세한 설명
 */
window.characters = [
    {
        id: "dream-1",
        name: "Nellie Rose (넬리 로즈)",
        age: "31세",
        stand: "BANG BANG\n발사된 총알의 속도를 늦추거나 빠르게 한다. 느린 탄환으로 상대를 방심시킨 뒤 순간적으로 가속하는 식.",
        intro: "마운틴 팀 드림",
        description: "노란 머리에 푸른 눈동자를 지녔으며, 언제나 여유로운 미소를 띠고 있는 미인.\n사람을 죽였다는 혐의로 현상수배범이 되었다. 그 사실의 진위여부는 알지 못한다.\n항상 여유롭게 웃으며 마운틴 팀을 따돌리고 달아난다. 능글맞은 장난을 치는 건 덤.\n본인보다 어린 사람들은 '꼬맹이'라 부르기도 한다.",
        photo: "images/마운틴팀.png"
    },
    {
        id: "dream-2",
        name: "Lucia Bellini (루치아 벨리니)",
        age: "20세",
        stand: "X",
        intro: "브루노 부차라티 드림",
        description: "노란 머리에 푸른 눈동자를 지녔으며, 발랄한 미소를 띠고 있는 여자.\n부차라티가 매일 찾는 카페의 점원이다. 그에게 커피와 함께 항상 레몬 사탕을 건네준다.\n이 마을에 온 지 얼마 되지 않았기에 규칙이나 갱스터에 대해 잘 모른다. 때문에 부차라티를 그저 평범한 직장인이나 시민으로 알고있다. 그가 갱인 줄은 꿈에도 모른다.",
        photo: "images/브루노부차라티.png"
    },
    {
        id: "dream-3",
        name: "長谷川 愛 (하세가와 아이)",
        age: "16세",
        stand: "슈가 스펠\n손 끝에서 나오는 설탕 물질로 원하는 물건을 만들 수 있다. 가느다란 실부터 탄탄한 벽까지 가능하다. 하지만 어디까지나 설탕이다보니 물 같은 액체류에 약하다.",
        intro: "히가시카타 죠스케 드림",
        description: "갈색 단발 머리와 고동색의 눈동자를 지녔으며, 부드러운 미소를 띠고있는 귀여운 미인.\n화를 내는 법이 없고 항상 생글생글 웃으며 부드럽게 말한다.\n히가시카타 죠스케를 짝사랑 중이며, 그의 앞에 설 때는 얼굴이 새빨개져서 아무 말도 못하고 안절부절 한다.",
        photo: "images/히가시카타죠슷게.png",
            
        motif: {
        personImages: [
        "images/아아이1.png",
        "images/아이2.png",
        "images/아이3.png"
    ],

        work: "AESTHETIC",
        workImage: "images/aesthetic.png",
        workDescription: "캐릭터의 분위기와 색감, 이미지에 대한 기록",

        music: "恋はじめまして (사랑, 시작했습니다)",
        musicArtist: "岡田 有希子 (오카다 유키코)",
        musicVideoId: "oFN03dRAbZE",
        musicCover: "images/아이.png",
        musicDescription: "곡에 대한 설명",

        other: "",
        tags: []
        }
    }
];
