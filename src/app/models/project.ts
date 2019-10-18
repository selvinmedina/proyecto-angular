export class Project {
    constructor(
        public id: string,
        public name: string,
        public descripcion: string,
        public category: string,
        public year: number,
        public langs: string,
        public image: string
    ) { }
}