export class Game {
    #_id: string;
    #title: string;
    #price: number;
    #year!: number;
    #rate!: number;
    #minPlayer!: number;
    #maxPlayer!: number;
    publisher!: Publisher;

    set _id(id: string) {
        this.#_id = id;
    }

    get _id(): string {
        return this.#_id;
    }

    set title(title: string) { this.#title = title; }
    get title(): string { return this.#title; }
    set price(price: number) { this.#price = price; }
    get price(): number { return this.#price}
    set year(year: number) { this.#year = year; }
    get year(): number { return this.#year}
    set rate(rate: number) { this.#rate = rate; }
    get rate(): number { return this.#rate}
    set minPlayer(minPlayer: number) { this.#minPlayer = minPlayer; }
    get minPlayer(): number { return this.#minPlayer}
    set maxPlayer(maxPlayer: number) { this.#maxPlayer = maxPlayer; }
    get maxPlayer(): number { return this.#maxPlayer}

    constructor(id: string, title: string, price: number) {
        this.#_id = id;
        this.#title = title;
        this.#price = price;
    }
}

class Publisher{
    name!: string
}