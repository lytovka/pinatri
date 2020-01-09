export default {
    state: {
        chapters: [
            {
                id: "/chapter-one",
                number: "1",
                name: "бросающий камни или камни саваоф"
            },
            {
                id: "/chapter-two",
                number: "2",
                name: "как я ем собаку"
            },
            {
                id: "/chapter-three",
                number: "3",
                name: "моё богатство — люди"
            },
            {
                id: "/chapter-four",
                number: "4",
                name: "герои быта"
            },
            {
                id: "/chapter-five",
                number: "5",
                name: "разный навсегда"
            },
            {
                id: "/chapter-six",
                number: "6",
                name: "на новенького"
            },
            {
                id: "/chapter-seven",
                number: "7",
                name: "проделки путешественника"
            },
            {
                id: "/chapter-eigth",
                number: "8",
                name: "масловка"
            },
            {
                id: "/chapter-nine",
                number: "9",
                name: "не про то"
            }
        ]
    },
    mutations: {
        
    },
    actions: {
        
    },
    getters: {
        getChapters(state) {
            return state.chapters;
        }
    }
}