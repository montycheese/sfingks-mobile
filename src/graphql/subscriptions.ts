// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateQuest = `subscription OnCreateQuest {
  onCreateQuest {
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
export const onUpdateQuest = `subscription OnUpdateQuest {
  onUpdateQuest {
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
export const onDeleteQuest = `subscription OnDeleteQuest {
  onDeleteQuest {
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
export const onCreateTask = `subscription OnCreateTask {
  onCreateTask {
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
export const onUpdateTask = `subscription OnUpdateTask {
  onUpdateTask {
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
export const onDeleteTask = `subscription OnDeleteTask {
  onDeleteTask {
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
export const onCreateRewardItem = `subscription OnCreateRewardItem {
  onCreateRewardItem {
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
export const onUpdateRewardItem = `subscription OnUpdateRewardItem {
  onUpdateRewardItem {
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
export const onDeleteRewardItem = `subscription OnDeleteRewardItem {
  onDeleteRewardItem {
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
export const onCreateWalletBalance = `subscription OnCreateWalletBalance($owner: String!) {
  onCreateWalletBalance(owner: $owner) {
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
export const onUpdateWalletBalance = `subscription OnUpdateWalletBalance($owner: String!) {
  onUpdateWalletBalance(owner: $owner) {
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
export const onDeleteWalletBalance = `subscription OnDeleteWalletBalance($owner: String!) {
  onDeleteWalletBalance(owner: $owner) {
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
export const onCreateTransaction = `subscription OnCreateTransaction($owner: String!) {
  onCreateTransaction(owner: $owner) {
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
export const onUpdateTransaction = `subscription OnUpdateTransaction($owner: String!) {
  onUpdateTransaction(owner: $owner) {
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
export const onDeleteTransaction = `subscription OnDeleteTransaction($owner: String!) {
  onDeleteTransaction(owner: $owner) {
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
