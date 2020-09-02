export default class Wallet {
    private _balance: number;
    private _balanceUpdateSubscribers = {};
    static instance: Wallet;
    static getInstance: () => (Wallet);

    constructor(opts: { balance: number; }) {
        this._balance = opts.balance;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        this._balance = value;
        this.notifyBalanceChanged(value);
    }

    incrementBalance(delta: number) {
        // todo: backend
        this._balance += delta;
    }

    notifyBalanceChanged(delta: number) {
        if (Object.keys(this._balanceUpdateSubscribers).length === 0) {
            return;
        }
        Object.keys(this._balanceUpdateSubscribers).forEach((subscriberId: string) => {
           const callback = this._balanceUpdateSubscribers[subscriberId];
           callback(this._balance, delta);
        });

    }

    subscribeToBalanceChanges(callback) {
        const subscriberId = Math.random().toString();
        this._balanceUpdateSubscribers[subscriberId] = callback;
        return subscriberId;
    }

    unsubscribe(subscriberId: string) {
        delete this._balanceUpdateSubscribers[subscriberId]
    }

    purgeSubscriptions() {
        this._balanceUpdateSubscribers = {};
    }
   
}

Wallet.instance = null;

Wallet.getInstance = () => {
    if (Wallet.instance === null) {
        Wallet.instance = new Wallet({ balance: 0 });
        return Wallet.instance;
    }
    return Wallet.instance;
};