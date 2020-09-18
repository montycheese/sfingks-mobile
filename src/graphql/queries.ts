// tslint:disable
// this is an auto generated file. This will be overwritten

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
        version
      }
      nextToken
    }
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
      }
      version
    }
    nextToken
  }
}
`;
export const getTask = `query GetTask($taskId: ID!) {
  getTask(taskId: $taskId) {
    taskId
    questId
    quest {
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
      }
      version
    }
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
    version
  }
}
`;
export const listTasks = `query ListTasks(
  $taskId: ID
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTasks(
    taskId: $taskId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      taskId
      questId
      quest {
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
        version
      }
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
      version
    }
    nextToken
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
      version
    }
    nextToken
  }
}
`;
export const getWalletBalance = `query GetWalletBalance($id: ID!) {
  getWalletBalance(id: $id) {
    id
    balance
    version
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
      version
    }
    nextToken
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
    }
    nextToken
  }
}
`;
export const questsByCategory = `query QuestsByCategory(
  $category: QuestCategory
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelQuestFilterInput
  $limit: Int
  $nextToken: String
) {
  questsByCategory(
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
      }
      version
    }
    nextToken
  }
}
`;
export const rewardItemsByCategory = `query RewardItemsByCategory(
  $category: RewardItemCategory
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRewardItemFilterInput
  $limit: Int
  $nextToken: String
) {
  rewardItemsByCategory(
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
      version
    }
    nextToken
  }
}
`;
