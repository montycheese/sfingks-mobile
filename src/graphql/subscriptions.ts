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
        version
      }
      nextToken
    }
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
        version
      }
      nextToken
    }
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
        version
      }
      nextToken
    }
    version
  }
}
`;
export const onCreateTask = `subscription OnCreateTask {
  onCreateTask {
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
export const onUpdateTask = `subscription OnUpdateTask {
  onUpdateTask {
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
export const onDeleteTask = `subscription OnDeleteTask {
  onDeleteTask {
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
    version
  }
}
`;
export const onCreateWalletBalance = `subscription OnCreateWalletBalance {
  onCreateWalletBalance {
    id
    balance
    version
  }
}
`;
export const onUpdateWalletBalance = `subscription OnUpdateWalletBalance {
  onUpdateWalletBalance {
    id
    balance
    version
  }
}
`;
export const onDeleteWalletBalance = `subscription OnDeleteWalletBalance {
  onDeleteWalletBalance {
    id
    balance
    version
  }
}
`;
export const onCreateTransaction = `subscription OnCreateTransaction {
  onCreateTransaction {
    transactionId
    userId
    transactionAmount
    rewardItemId
    taskId
  }
}
`;
export const onUpdateTransaction = `subscription OnUpdateTransaction {
  onUpdateTransaction {
    transactionId
    userId
    transactionAmount
    rewardItemId
    taskId
  }
}
`;
export const onDeleteTransaction = `subscription OnDeleteTransaction {
  onDeleteTransaction {
    transactionId
    userId
    transactionAmount
    rewardItemId
    taskId
  }
}
`;
