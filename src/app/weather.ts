export class Weather {
    constructor (
        public humidity: number = 0,
        public temp: number = 0,
        public lowTemp: number = 0,
        public highTemp: number = 0,
        public status: string = ""
    ) {}
}
