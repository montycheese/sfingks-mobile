// TODO: add listener that notifes when balance changes.

export default class Wallet {
    private _balance: number;

    constructor(opts: { balance: number; }) {
        this._balance = opts.balance;
    }

    get balance(): number {
        return this._balance;
    }
    set balance(value: number) {
        this._balance = value;
    }

    incrementBalance(delta: number) {
        // todo: backend
        this._balance += delta;
    }

    notifyBalanceChanged() {

    }

    static empty() {
        return new Wallet({ balance: 0 });
    }

}