// tslint:disable
// this is an auto generated file. This will be overwritten

export const syncQuests = `query SyncQuests(
  $filter: ModelQuestFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncQuests(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      version
    }
    nextToken
    startedAt
  }
}
`;
export const getQuest = `query GetQuest($questId: ID!) {
  getQuest(questId: $questId) {
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
export const listQuests = `query ListQuests(
  $questId: ID
  $filter: ModelQuestFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listQuests(
    questId: $questId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      version
    }
    nextToken
    startedAt
  }
}
`;
export const syncTasks = `query SyncTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTasks(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
  }
}
`;
export const getTask = `query GetTask($questId: ID!, $taskId: ID!) {
  getTask(questId: $questId, taskId: $taskId) {
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
export const listTasks = `query ListTasks(
  $questId: ID
  $taskId: ModelIDKeyConditionInput
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTasks(
    questId: $questId
    taskId: $taskId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    startedAt
  }
}
`;
export const syncRewardItems = `query SyncRewardItems(
  $filter: ModelRewardItemFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncRewardItems(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
  }
}
`;
export const getRewardItem = `query GetRewardItem($itemId: ID!) {
  getRewardItem(itemId: $itemId) {
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
export const listRewardItems = `query ListRewardItems(
  $itemId: ID
  $filter: ModelRewardItemFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRewardItems(
    itemId: $itemId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    startedAt
  }
}
`;
export const syncWalletBalances = `query SyncWalletBalances(
  $filter: ModelWalletBalanceFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncWalletBalances(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      balance
      _version
      _deleted
      _lastChangedAt
      version
      owner
    }
    nextToken
    startedAt
  }
}
`;
export const getWalletBalance = `query GetWalletBalance($id: ID!) {
  getWalletBalance(id: $id) {
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
export const listWalletBalances = `query ListWalletBalances(
  $filter: ModelWalletBalanceFilterInput
  $limit: Int
  $nextToken: String
) {
  listWalletBalances(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      balance
      _version
      _deleted
      _lastChangedAt
      version
      owner
    }
    nextToken
    startedAt
  }
}
`;
export const syncTransactions = `query SyncTransactions(
  $filter: ModelTransactionFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTransactions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
  }
}
`;
export const getTransaction = `query GetTransaction($id: ID!) {
  getTransaction(id: $id) {
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
export const listTransactions = `query ListTransactions(
  $filter: ModelTransactionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    startedAt
  }
}
`;
export const questByCategory = `query QuestByCategory(
  $category: QuestCategory
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelQuestFilterInput
  $limit: Int
  $nextToken: String
) {
  questByCategory(
    category: $category
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      version
    }
    nextToken
    startedAt
  }
}
`;
export const rewardItemByCategory = `query RewardItemByCategory(
  $category: RewardItemCategory
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRewardItemFilterInput
  $limit: Int
  $nextToken: String
) {
  rewardItemByCategory(
    category: $category
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
  }
}
`;
