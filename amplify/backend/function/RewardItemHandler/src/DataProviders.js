
const { v4: uuidv4 } = require('uuid');

class RewardItemDataProvider {
    constructor(ddbClient, tableName) {
        this._ddbClient = ddbClient;
        this._tableName = tableName
    }

    async getRewardItem(itemId) {
        let getItemParams = {
            TableName: this._tableName,
            Key: { itemId }
        };

        return new Promise((resolve, reject) => {
            this._ddbClient.get(getItemParams,(err, data) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    if (data.Item) {
                        resolve(data.Item);
                    } else {
                        reject(new Error('Reward Item not found ' + itemId));
                    }
                }
            });
        });
    }
}

class WalletBalanceDataProvider {
    constructor(ddbClient, tableName) {
        this._ddbClient = ddbClient;
        this._tableName = tableName
    }

    async getBalance(userId) {
        let getItemParams = {
            TableName: this._tableName,
            Key: { id: userId }
        };

        return new Promise((resolve, reject) => {
            this._ddbClient.get(getItemParams,(err, data) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    if (data.Item) {
                        resolve(data.Item);
                    } else {
                        reject(new Error('User balance not found ' + userId));
                    }
                }
            });
        });
    }

    async updateBalance(userId, oldBalance, delta) {
        const updateParams = {
            Key : { id: userId },
            TableName: this._tableName,
            UpdateExpression: 'set #newBalance = :oldBalance + :delta, #newUpdatedAt = :updatedAt',
            ConditionExpression: '#newBalance >= 0',
            ExpressionAttributeNames: {'#newBalance' : 'balance', '#newUpdatedAt' : 'updatedAt'},
            ExpressionAttributeValues: {
                ':oldBalance' : oldBalance,
                ':delta' : delta,
                ':updatedAt' : new Date().toISOString()
            }
        };

        return new Promise((resolve, reject) => {
            this._ddbClient.update(updateParams,(err, data) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

}

class TransactionDataProvider {
    constructor(ddbClient, tableName) {
        this._ddbClient = ddbClient;
        this._tableName = tableName
    }

    // TODO: add status?
    async createTransaction(userId, rewardItemId, transactionAmount) {
        const now = new Date().toISOString();
        let putItemParams = {
            TableName: this._tableName,
            Item: {
                id: uuidv4(),
                userId,
                rewardItemId,
                transactionAmount,
                createdAt: now,
                updatedAt: now
            }
        };

        return new Promise((resolve, reject) => {
            this._ddbClient.put(putItemParams,(err, data) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

}


module.exports = {
    RewardItemDataProvider,
    WalletBalanceDataProvider,
    TransactionDataProvider
};
