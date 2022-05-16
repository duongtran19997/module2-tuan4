export class Country{
    private _gold:number;
    private _silver:number;
    private _bronze:number;
    private _name:string;

    constructor(gold: number, silver: number, bronze: number, name: string) {
        this._gold = gold;
        this._silver = silver;
        this._bronze = bronze;
        this._name = name;
    }

    get gold(): number {
        return this._gold;
    }

    get silver(): number {
        return this._silver;
    }

    get bronze(): number {
        return this._bronze;
    }

    get name(): string {
        return this._name;
    }
}