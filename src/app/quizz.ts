export interface Question {
    label: string;
    answerA: string;
    answerB: string;
    answerC: string;
    answerD: string;
    goodAnswer: string;
}


export class Quizz {
    questions: Question[] = [];
    constructor(public name: string) {}
}
