const forms = ["feelings", "likes and dislikes", "saying no", "asking for help", "prioritizing enjoyment", "eating healthy", "exercise", "rest and relaxation", "self-discipline", "self-soothing"];

const quizData = [

    {
        id: "1",
        question: "Sometimes you feel you don't belong when with family or friends",
        form: [0] 
    },
    {
        id: "2",
        question: "Pride yourself on not relying on others",
        form: [3]
    }, 
    {
        id: "3",
        question: "Have difficulty asking for help",
        form: [3]
    },
    {
        id: "4",
        question: "Friends or family complain you're aloof or distant",
        form: [0]  
    },
    {
        id: "5",
        question: "Feel you have not met your potential in life",
        form: [0, 8]  
    },
    {
        id: "6",
        question: "Often just want to be left alone",
        form: [1]
    },
    {
        id: "7",
        question: "Secretly feel you may be a fraud",
        form: [0,8,9]
    },
    {
        id: "8",
        question: "Tend to feel uncomfortable in social situations",
        form: [0,2]
    },
    {
        id: "9",
        question: "Often feel disappointed or angry with yourself",
        form: [0,8,9]
    },
    {
        id: "10",
        question: "Judge yourself more harshly than you judge others",
        form: [0,3,9]
    },
    {
        id: "11",
        question: "Compare yourself to others and find yourself sadly lacking",
        form: [0,4,8]
    },
    {
        id: "12",
        question: "Find it easier to love animals than people",
        form: [0,1,2]
    },
    {
        id: "13",
        question: "Often feel irritable or unhappy for no apparent reason",
        form: [0,1,4,9]
    },
    {
        id: "14",
        question: "Have trouble knowing what you're feeling",
        form: [0,1]
    },
    {
        id: "15",
        question: "Have trouble identifying your strengths and weaknesses",
        form: [0]
    },
    {
        id: "16",
        question: "Sometimes feel you're on the outside looking in",
        form: [0]
    },
    {
        id: "17",
        question: "Believe you're one of those people who could easily be a hermit",
        form: [0,1,2]
    },
    {
        id: "18",
        question: "Have trouble calming yourself",
        form: [9,0]
    },
    {
        id: "19",
        question: "Feel there's something holding you back from being present in the moment",
        form: [0,4]
    },
    {
        id: "20",
        question: "At times feel empty inside",
        form: [0,4]
    },
    {
        id: "21",
        question: "Secretly feel there's something wrong with you",
        form: [0]
    },
    {
        id: "22",
        question: "Struggle with self-discipline",
        form: [8]
    }, 
];

export { forms, quizData };