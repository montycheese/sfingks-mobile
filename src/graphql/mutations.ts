// tslint:disable
// this is an auto generated file. This will be overwritten

export const createQuest = `mutation CreateQuest(
  $input: CreateQuestInput!
  $condition: ModelQuestConditionInput
) {
  createQuest(input: $input, condition: $condition) {
    questId
    title
    totalPoints
    endDate
    imageUrl
    slotsRemaining
    description
    category
    creatorId
    createdAt
    tasks {
      items {
        taskId
        questId
        description
        position
        module
        submodule
        points
        remaining
        completed
        _version
        _deleted
        _lastChangedAt
        version
      }
      nextToken
      startedAt
    }
    _version
    _deleted
    _lastChangedAt
    version
  }
}
`;
export const updateQuest = `mutation UpdateQuest(
  $input: UpdateQuestInput!
  $condition: ModelQuestConditionInput
) {
  updateQuest(input: $input, condition: $condition) {
    questId
    title
    totalPoints
    endDate
    imageUrl
    slotsRemaining
    description
    category
    creatorId
    createdAt
    tasks {
      items {
        taskId
        questId
        description
        position
        module
        submodule
        points
        remaining
        completed
        _version
        _deleted
        _lastChangedAt
        version
      }
      nextToken
      startedAt
    }
    _version
    _deleted
    _lastChangedAt
    version
  }
}
`;
export const deleteQuest = `mutation DeleteQuest(
  $input: DeleteQuestInput!
  $condition: ModelQuestConditionInput
) {
  deleteQuest(input: $input, condition: $condition) {
    questId
    title
    totalPoints
    endDate
    imageUrl
    slotsRemaining
    description
    category
    creatorId
    createdAt
    tasks {
      items {
        taskId
        questId
        description
        position
        module
        submodule
        points
        remaining
        completed
        _version
        _deleted
        _lastChangedAt
        version
      }
      nextToken
      startedAt
    }
    _version
    _deleted
    _lastChangedAt
    version
  }
}
`;
export const createTask = `mutation CreateTask(
  $input: CreateTaskInput!
  $condition: ModelTaskConditionInput
) {
  createTask(input: $input, condition: $condition) {
    taskId
    questId
    description
    position
    module
    submodule
    points
    remaining
    moduleSpecificMetadata {
      username
      name
      completed
      url
      iosUrl
      androidUrl
    }
    completed
    _version
    _deleted
    _lastChangedAt
    version
  }
}
`;
export const updateTask = `mutation UpdateTask(
  $input: UpdateTaskInput!
  $condition: ModelTaskConditionInput
) {
  updateTask(input: $input, condition: $condition) {
    taskId
    questId
    description
    position
    module
    submodule
    points
    remaining
    moduleSpecificMetadata {
      username
      name
      completed
      url
      iosUrl
      androidUrl
    }
    completed
    _version
    _deleted
    _lastChangedAt
    version
  }
}
`;
export const deleteTask = `mutation DeleteTask(
  $input: DeleteTaskInput!
  $condition: ModelTaskConditionInput
) {
  deleteTask(input: $input, condition: $condition) {
    taskId
    questId
    description
    position
    module
    submodule
    points
    remaining
    moduleSpecificMetadata {
      username
      name
      completed
      url
      iosUrl
      androidUrl
    }
    completed
    _version
    _deleted
    _lastChangedAt
    version
  }
}
`;
export const createRewardItem = `mutation CreateRewardItem(
  $input: CreateRewardItemInput!
  $condition: ModelRewardItemConditionInput
) {
  createRewardItem(input: $input, condition: $condition) {
    itemId
    title
    createdAt
    cost
    images
    inventoryRemaining
    description
    tags
    category
    availableAt
    _version
    _deleted
    _lastChangedAt
    version
  }
}
`;
export const updateRewardItem = `mutation UpdateRewardItem(
  $input: UpdateRewardItemInput!
  $condition: ModelRewardItemConditionInput
) {
  updateRewardItem(input: $input, condition: $condition) {
    itemId
    title
    createdAt
    cost
    images
    inventoryRemaining
    description
    tags
    category
    availableAt
    _version
    _deleted
    _lastChangedAt
    version
  }
}
`;
export const deleteRewardItem = `mutation DeleteRewardItem(
  $input: DeleteRewardItemInput!
  $condition: ModelRewardItemConditionInput
) {
  deleteRewardItem(input: $input, condition: $condition) {
    itemId
    title
    createdAt
    cost
    images
    inventoryRemaining
    description
    tags
    category
    availableAt
    _version
    _deleted
    _lastChangedAt
    version
  }
}
`;
export const createWalletBalance = `mutation CreateWalletBalance(
  $input: CreateWalletBalanceInput!
  $condition: ModelWalletBalanceConditionInput
) {
  createWalletBalance(input: $input, condition: $condition) {
    id
    balance
    _version
    _deleted
    _lastChangedAt
    version
    owner
  }
}
`;
export const updateWalletBalance = `mutation UpdateWalletBalance(
  $input: UpdateWalletBalanceInput!
  $condition: ModelWalletBalanceConditionInput
) {
  updateWalletBalance(input: $input, condition: $condition) {
    id
    balance
    _version
    _deleted
    _lastChangedAt
    version
    owner
  }
}
`;
export const deleteWalletBalance = `mutation DeleteWalletBalance(
  $input: DeleteWalletBalanceInput!
  $condition: ModelWalletBalanceConditionInput
) {
  deleteWalletBalance(input: $input, condition: $condition) {
    id
    balance
    _version
    _deleted
    _lastChangedAt
    version
    owner
  }
}
`;
export const createTransaction = `mutation CreateTransaction(
  $input: CreateTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  createTransaction(input: $input, condition: $condition) {
    transactionId
    userId
    transactionAmount
    rewardItemId
    taskId
    _version
    _deleted
    _lastChangedAt
    owner
  }
}
`;
export const updateTransaction = `mutation UpdateTransaction(
  $input: UpdateTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  updateTransaction(input: $input, condition: $condition) {
    transactionId
    userId
    transactionAmount
    rewardItemId
    taskId
    _version
    _deleted
    _lastChangedAt
    owner
  }
}
`;
export const deleteTransaction = `mutation DeleteTransaction(
  $input: DeleteTransactionInput!
  $condition: ModelTransactionConditionInput
) {
  deleteTransaction(input: $input, condition: $condition) {
    transactionId
    userId
    transactionAmount
    rewardItemId
    taskId
    _version
    _deleted
    _lastChangedAt
    owner
  }
}
`;
