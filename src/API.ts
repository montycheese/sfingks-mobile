/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateQuestInput = {
  questId: string,
  title: string,
  totalPoints?: number | null,
  endDate: string,
  imageUrl?: string | null,
  slotsRemaining?: number | null,
  description?: string | null,
  category: QuestCategory,
  creatorId: string,
  createdAt: string,
};

export enum QuestCategory {
  FEATURED = "FEATURED",
  NEW = "NEW",
  HOT = "HOT",
  RECOMMENDED = "RECOMMENDED",
}


export type ModelQuestConditionInput = {
  title?: ModelStringInput | null,
  totalPoints?: ModelIntInput | null,
  endDate?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  slotsRemaining?: ModelIntInput | null,
  description?: ModelStringInput | null,
  category?: ModelQuestCategoryInput | null,
  creatorId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelQuestConditionInput | null > | null,
  or?: Array< ModelQuestConditionInput | null > | null,
  not?: ModelQuestConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelQuestCategoryInput = {
  eq?: QuestCategory | null,
  ne?: QuestCategory | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum Module {
  TWITTER = "TWITTER",
  INSTAGRAM = "INSTAGRAM",
  WEBPAGE = "WEBPAGE",
  FACEBOOK = "FACEBOOK",
  APP_STORE = "APP_STORE",
}


export enum Submodule {
  FOLLOW = "FOLLOW",
  RETWEET = "RETWEET",
  LIKE = "LIKE",
  VIEW = "VIEW",
  DOWNLOAD = "DOWNLOAD",
}


export type UpdateQuestInput = {
  questId: string,
  title?: string | null,
  totalPoints?: number | null,
  endDate?: string | null,
  imageUrl?: string | null,
  slotsRemaining?: number | null,
  description?: string | null,
  category?: QuestCategory | null,
  creatorId?: string | null,
  createdAt?: string | null,
  expectedVersion: number,
};

export type DeleteQuestInput = {
  questId: string,
  expectedVersion: number,
};

export type CreateTaskInput = {
  taskId: string,
  questId: string,
  description?: string | null,
  position?: number | null,
  module?: Module | null,
  submodule?: Submodule | null,
  points?: number | null,
  remaining?: number | null,
  moduleSpecificMetadata?: ModuleSpecificMetadataInput | null,
  completed?: boolean | null,
};

export type ModuleSpecificMetadataInput = {
  username?: string | null,
  name?: string | null,
  completed?: boolean | null,
  url?: string | null,
  iosUrl?: string | null,
  androidUrl?: string | null,
};

export type ModelTaskConditionInput = {
  questId?: ModelIDInput | null,
  description?: ModelStringInput | null,
  position?: ModelIntInput | null,
  module?: ModelModuleInput | null,
  submodule?: ModelSubmoduleInput | null,
  points?: ModelIntInput | null,
  remaining?: ModelIntInput | null,
  completed?: ModelBooleanInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
};

export type ModelModuleInput = {
  eq?: Module | null,
  ne?: Module | null,
};

export type ModelSubmoduleInput = {
  eq?: Submodule | null,
  ne?: Submodule | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTaskInput = {
  taskId: string,
  questId?: string | null,
  description?: string | null,
  position?: number | null,
  module?: Module | null,
  submodule?: Submodule | null,
  points?: number | null,
  remaining?: number | null,
  moduleSpecificMetadata?: ModuleSpecificMetadataInput | null,
  completed?: boolean | null,
  expectedVersion: number,
};

export type DeleteTaskInput = {
  taskId: string,
  expectedVersion: number,
};

export type CreateRewardItemInput = {
  itemId: string,
  title: string,
  createdAt: string,
  cost?: number | null,
  images: Array< string | null >,
  inventoryRemaining?: number | null,
  description?: string | null,
  tags?: Array< string | null > | null,
  category: RewardItemCategory,
  availableAt?: string | null,
};

export enum RewardItemCategory {
  UPCOMING = "UPCOMING",
  FEATURED = "FEATURED",
  NEW = "NEW",
}


export type ModelRewardItemConditionInput = {
  title?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  cost?: ModelIntInput | null,
  images?: ModelStringInput | null,
  inventoryRemaining?: ModelIntInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  category?: ModelRewardItemCategoryInput | null,
  availableAt?: ModelStringInput | null,
  and?: Array< ModelRewardItemConditionInput | null > | null,
  or?: Array< ModelRewardItemConditionInput | null > | null,
  not?: ModelRewardItemConditionInput | null,
};

export type ModelRewardItemCategoryInput = {
  eq?: RewardItemCategory | null,
  ne?: RewardItemCategory | null,
};

export type UpdateRewardItemInput = {
  itemId: string,
  title?: string | null,
  createdAt?: string | null,
  cost?: number | null,
  images?: Array< string | null > | null,
  inventoryRemaining?: number | null,
  description?: string | null,
  tags?: Array< string | null > | null,
  category?: RewardItemCategory | null,
  availableAt?: string | null,
  expectedVersion: number,
};

export type DeleteRewardItemInput = {
  itemId: string,
  expectedVersion: number,
};

export type CreateWalletBalanceInput = {
  id?: string | null,
  balance?: number | null,
};

export type ModelWalletBalanceConditionInput = {
  balance?: ModelIntInput | null,
  and?: Array< ModelWalletBalanceConditionInput | null > | null,
  or?: Array< ModelWalletBalanceConditionInput | null > | null,
  not?: ModelWalletBalanceConditionInput | null,
};

export type UpdateWalletBalanceInput = {
  id: string,
  balance?: number | null,
  expectedVersion: number,
};

export type DeleteWalletBalanceInput = {
  id?: string | null,
  expectedVersion: number,
};

export type CreateTransactionInput = {
  transactionId: string,
  userId: string,
  transactionAmount?: number | null,
  rewardItemId?: string | null,
  taskId?: string | null,
};

export type ModelTransactionConditionInput = {
  transactionId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  transactionAmount?: ModelIntInput | null,
  rewardItemId?: ModelIDInput | null,
  taskId?: ModelIDInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  not?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionInput = {
  transactionId?: string | null,
  userId?: string | null,
  transactionAmount?: number | null,
  rewardItemId?: string | null,
  taskId?: string | null,
};

export type DeleteTransactionInput = {
  id?: string | null,
};

export type ModelQuestFilterInput = {
  questId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  totalPoints?: ModelIntInput | null,
  endDate?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  slotsRemaining?: ModelIntInput | null,
  description?: ModelStringInput | null,
  category?: ModelQuestCategoryInput | null,
  creatorId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelQuestFilterInput | null > | null,
  or?: Array< ModelQuestFilterInput | null > | null,
  not?: ModelQuestFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTaskFilterInput = {
  taskId?: ModelIDInput | null,
  questId?: ModelIDInput | null,
  description?: ModelStringInput | null,
  position?: ModelIntInput | null,
  module?: ModelModuleInput | null,
  submodule?: ModelSubmoduleInput | null,
  points?: ModelIntInput | null,
  remaining?: ModelIntInput | null,
  completed?: ModelBooleanInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
};

export type ModelRewardItemFilterInput = {
  itemId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  cost?: ModelIntInput | null,
  images?: ModelStringInput | null,
  inventoryRemaining?: ModelIntInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  category?: ModelRewardItemCategoryInput | null,
  availableAt?: ModelStringInput | null,
  and?: Array< ModelRewardItemFilterInput | null > | null,
  or?: Array< ModelRewardItemFilterInput | null > | null,
  not?: ModelRewardItemFilterInput | null,
};

export type ModelWalletBalanceFilterInput = {
  id?: ModelIDInput | null,
  balance?: ModelIntInput | null,
  and?: Array< ModelWalletBalanceFilterInput | null > | null,
  or?: Array< ModelWalletBalanceFilterInput | null > | null,
  not?: ModelWalletBalanceFilterInput | null,
};

export type ModelTransactionFilterInput = {
  transactionId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  transactionAmount?: ModelIntInput | null,
  rewardItemId?: ModelIDInput | null,
  taskId?: ModelIDInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  not?: ModelTransactionFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateQuestMutationVariables = {
  input: CreateQuestInput,
  condition?: ModelQuestConditionInput | null,
};

export type CreateQuestMutation = {
  createQuest:  {
    __typename: "Quest",
    questId: string,
    title: string,
    totalPoints: number | null,
    endDate: string,
    imageUrl: string | null,
    slotsRemaining: number | null,
    description: string | null,
    category: QuestCategory,
    creatorId: string,
    createdAt: string,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        taskId: string,
        questId: string,
        description: string | null,
        position: number | null,
        module: Module | null,
        submodule: Submodule | null,
        points: number | null,
        remaining: number | null,
        completed: boolean | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type UpdateQuestMutationVariables = {
  input: UpdateQuestInput,
  condition?: ModelQuestConditionInput | null,
};

export type UpdateQuestMutation = {
  updateQuest:  {
    __typename: "Quest",
    questId: string,
    title: string,
    totalPoints: number | null,
    endDate: string,
    imageUrl: string | null,
    slotsRemaining: number | null,
    description: string | null,
    category: QuestCategory,
    creatorId: string,
    createdAt: string,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        taskId: string,
        questId: string,
        description: string | null,
        position: number | null,
        module: Module | null,
        submodule: Submodule | null,
        points: number | null,
        remaining: number | null,
        completed: boolean | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type DeleteQuestMutationVariables = {
  input: DeleteQuestInput,
  condition?: ModelQuestConditionInput | null,
};

export type DeleteQuestMutation = {
  deleteQuest:  {
    __typename: "Quest",
    questId: string,
    title: string,
    totalPoints: number | null,
    endDate: string,
    imageUrl: string | null,
    slotsRemaining: number | null,
    description: string | null,
    category: QuestCategory,
    creatorId: string,
    createdAt: string,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        taskId: string,
        questId: string,
        description: string | null,
        position: number | null,
        module: Module | null,
        submodule: Submodule | null,
        points: number | null,
        remaining: number | null,
        completed: boolean | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask:  {
    __typename: "Task",
    taskId: string,
    questId: string,
    quest:  {
      __typename: "Quest",
      questId: string,
      title: string,
      totalPoints: number | null,
      endDate: string,
      imageUrl: string | null,
      slotsRemaining: number | null,
      description: string | null,
      category: QuestCategory,
      creatorId: string,
      createdAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
      } | null,
      version: number,
    },
    description: string | null,
    position: number | null,
    module: Module | null,
    submodule: Submodule | null,
    points: number | null,
    remaining: number | null,
    moduleSpecificMetadata:  {
      __typename: "ModuleSpecificMetadata",
      username: string | null,
      name: string | null,
      completed: boolean | null,
      url: string | null,
      iosUrl: string | null,
      androidUrl: string | null,
    } | null,
    completed: boolean | null,
    version: number,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask:  {
    __typename: "Task",
    taskId: string,
    questId: string,
    quest:  {
      __typename: "Quest",
      questId: string,
      title: string,
      totalPoints: number | null,
      endDate: string,
      imageUrl: string | null,
      slotsRemaining: number | null,
      description: string | null,
      category: QuestCategory,
      creatorId: string,
      createdAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
      } | null,
      version: number,
    },
    description: string | null,
    position: number | null,
    module: Module | null,
    submodule: Submodule | null,
    points: number | null,
    remaining: number | null,
    moduleSpecificMetadata:  {
      __typename: "ModuleSpecificMetadata",
      username: string | null,
      name: string | null,
      completed: boolean | null,
      url: string | null,
      iosUrl: string | null,
      androidUrl: string | null,
    } | null,
    completed: boolean | null,
    version: number,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask:  {
    __typename: "Task",
    taskId: string,
    questId: string,
    quest:  {
      __typename: "Quest",
      questId: string,
      title: string,
      totalPoints: number | null,
      endDate: string,
      imageUrl: string | null,
      slotsRemaining: number | null,
      description: string | null,
      category: QuestCategory,
      creatorId: string,
      createdAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
      } | null,
      version: number,
    },
    description: string | null,
    position: number | null,
    module: Module | null,
    submodule: Submodule | null,
    points: number | null,
    remaining: number | null,
    moduleSpecificMetadata:  {
      __typename: "ModuleSpecificMetadata",
      username: string | null,
      name: string | null,
      completed: boolean | null,
      url: string | null,
      iosUrl: string | null,
      androidUrl: string | null,
    } | null,
    completed: boolean | null,
    version: number,
  } | null,
};

export type CreateRewardItemMutationVariables = {
  input: CreateRewardItemInput,
  condition?: ModelRewardItemConditionInput | null,
};

export type CreateRewardItemMutation = {
  createRewardItem:  {
    __typename: "RewardItem",
    itemId: string,
    title: string,
    createdAt: string,
    cost: number | null,
    images: Array< string | null >,
    inventoryRemaining: number | null,
    description: string | null,
    tags: Array< string | null > | null,
    category: RewardItemCategory,
    availableAt: string | null,
    version: number,
  } | null,
};

export type UpdateRewardItemMutationVariables = {
  input: UpdateRewardItemInput,
  condition?: ModelRewardItemConditionInput | null,
};

export type UpdateRewardItemMutation = {
  updateRewardItem:  {
    __typename: "RewardItem",
    itemId: string,
    title: string,
    createdAt: string,
    cost: number | null,
    images: Array< string | null >,
    inventoryRemaining: number | null,
    description: string | null,
    tags: Array< string | null > | null,
    category: RewardItemCategory,
    availableAt: string | null,
    version: number,
  } | null,
};

export type DeleteRewardItemMutationVariables = {
  input: DeleteRewardItemInput,
  condition?: ModelRewardItemConditionInput | null,
};

export type DeleteRewardItemMutation = {
  deleteRewardItem:  {
    __typename: "RewardItem",
    itemId: string,
    title: string,
    createdAt: string,
    cost: number | null,
    images: Array< string | null >,
    inventoryRemaining: number | null,
    description: string | null,
    tags: Array< string | null > | null,
    category: RewardItemCategory,
    availableAt: string | null,
    version: number,
  } | null,
};

export type CreateWalletBalanceMutationVariables = {
  input: CreateWalletBalanceInput,
  condition?: ModelWalletBalanceConditionInput | null,
};

export type CreateWalletBalanceMutation = {
  createWalletBalance:  {
    __typename: "WalletBalance",
    id: string,
    balance: number | null,
    version: number,
  } | null,
};

export type UpdateWalletBalanceMutationVariables = {
  input: UpdateWalletBalanceInput,
  condition?: ModelWalletBalanceConditionInput | null,
};

export type UpdateWalletBalanceMutation = {
  updateWalletBalance:  {
    __typename: "WalletBalance",
    id: string,
    balance: number | null,
    version: number,
  } | null,
};

export type DeleteWalletBalanceMutationVariables = {
  input: DeleteWalletBalanceInput,
  condition?: ModelWalletBalanceConditionInput | null,
};

export type DeleteWalletBalanceMutation = {
  deleteWalletBalance:  {
    __typename: "WalletBalance",
    id: string,
    balance: number | null,
    version: number,
  } | null,
};

export type CreateTransactionMutationVariables = {
  input: CreateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type CreateTransactionMutation = {
  createTransaction:  {
    __typename: "Transaction",
    transactionId: string,
    userId: string,
    transactionAmount: number | null,
    rewardItemId: string | null,
    taskId: string | null,
  } | null,
};

export type UpdateTransactionMutationVariables = {
  input: UpdateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionMutation = {
  updateTransaction:  {
    __typename: "Transaction",
    transactionId: string,
    userId: string,
    transactionAmount: number | null,
    rewardItemId: string | null,
    taskId: string | null,
  } | null,
};

export type DeleteTransactionMutationVariables = {
  input: DeleteTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type DeleteTransactionMutation = {
  deleteTransaction:  {
    __typename: "Transaction",
    transactionId: string,
    userId: string,
    transactionAmount: number | null,
    rewardItemId: string | null,
    taskId: string | null,
  } | null,
};

export type GetQuestQueryVariables = {
  questId: string,
};

export type GetQuestQuery = {
  getQuest:  {
    __typename: "Quest",
    questId: string,
    title: string,
    totalPoints: number | null,
    endDate: string,
    imageUrl: string | null,
    slotsRemaining: number | null,
    description: string | null,
    category: QuestCategory,
    creatorId: string,
    createdAt: string,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        taskId: string,
        questId: string,
        description: string | null,
        position: number | null,
        module: Module | null,
        submodule: Submodule | null,
        points: number | null,
        remaining: number | null,
        completed: boolean | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type ListQuestsQueryVariables = {
  questId?: string | null,
  filter?: ModelQuestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListQuestsQuery = {
  listQuests:  {
    __typename: "ModelQuestConnection",
    items:  Array< {
      __typename: "Quest",
      questId: string,
      title: string,
      totalPoints: number | null,
      endDate: string,
      imageUrl: string | null,
      slotsRemaining: number | null,
      description: string | null,
      category: QuestCategory,
      creatorId: string,
      createdAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTaskQueryVariables = {
  taskId: string,
};

export type GetTaskQuery = {
  getTask:  {
    __typename: "Task",
    taskId: string,
    questId: string,
    quest:  {
      __typename: "Quest",
      questId: string,
      title: string,
      totalPoints: number | null,
      endDate: string,
      imageUrl: string | null,
      slotsRemaining: number | null,
      description: string | null,
      category: QuestCategory,
      creatorId: string,
      createdAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
      } | null,
      version: number,
    },
    description: string | null,
    position: number | null,
    module: Module | null,
    submodule: Submodule | null,
    points: number | null,
    remaining: number | null,
    moduleSpecificMetadata:  {
      __typename: "ModuleSpecificMetadata",
      username: string | null,
      name: string | null,
      completed: boolean | null,
      url: string | null,
      iosUrl: string | null,
      androidUrl: string | null,
    } | null,
    completed: boolean | null,
    version: number,
  } | null,
};

export type ListTasksQueryVariables = {
  taskId?: string | null,
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTasksQuery = {
  listTasks:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      taskId: string,
      questId: string,
      quest:  {
        __typename: "Quest",
        questId: string,
        title: string,
        totalPoints: number | null,
        endDate: string,
        imageUrl: string | null,
        slotsRemaining: number | null,
        description: string | null,
        category: QuestCategory,
        creatorId: string,
        createdAt: string,
        version: number,
      },
      description: string | null,
      position: number | null,
      module: Module | null,
      submodule: Submodule | null,
      points: number | null,
      remaining: number | null,
      moduleSpecificMetadata:  {
        __typename: "ModuleSpecificMetadata",
        username: string | null,
        name: string | null,
        completed: boolean | null,
        url: string | null,
        iosUrl: string | null,
        androidUrl: string | null,
      } | null,
      completed: boolean | null,
      version: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetRewardItemQueryVariables = {
  itemId: string,
};

export type GetRewardItemQuery = {
  getRewardItem:  {
    __typename: "RewardItem",
    itemId: string,
    title: string,
    createdAt: string,
    cost: number | null,
    images: Array< string | null >,
    inventoryRemaining: number | null,
    description: string | null,
    tags: Array< string | null > | null,
    category: RewardItemCategory,
    availableAt: string | null,
    version: number,
  } | null,
};

export type ListRewardItemsQueryVariables = {
  itemId?: string | null,
  filter?: ModelRewardItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListRewardItemsQuery = {
  listRewardItems:  {
    __typename: "ModelRewardItemConnection",
    items:  Array< {
      __typename: "RewardItem",
      itemId: string,
      title: string,
      createdAt: string,
      cost: number | null,
      images: Array< string | null >,
      inventoryRemaining: number | null,
      description: string | null,
      tags: Array< string | null > | null,
      category: RewardItemCategory,
      availableAt: string | null,
      version: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetWalletBalanceQueryVariables = {
  id: string,
};

export type GetWalletBalanceQuery = {
  getWalletBalance:  {
    __typename: "WalletBalance",
    id: string,
    balance: number | null,
    version: number,
  } | null,
};

export type ListWalletBalancesQueryVariables = {
  filter?: ModelWalletBalanceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWalletBalancesQuery = {
  listWalletBalances:  {
    __typename: "ModelWalletBalanceConnection",
    items:  Array< {
      __typename: "WalletBalance",
      id: string,
      balance: number | null,
      version: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTransactionQueryVariables = {
  id: string,
};

export type GetTransactionQuery = {
  getTransaction:  {
    __typename: "Transaction",
    transactionId: string,
    userId: string,
    transactionAmount: number | null,
    rewardItemId: string | null,
    taskId: string | null,
  } | null,
};

export type ListTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransactionsQuery = {
  listTransactions:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      transactionId: string,
      userId: string,
      transactionAmount: number | null,
      rewardItemId: string | null,
      taskId: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type QuestsByCategoryQueryVariables = {
  category?: QuestCategory | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuestsByCategoryQuery = {
  questsByCategory:  {
    __typename: "ModelQuestConnection",
    items:  Array< {
      __typename: "Quest",
      questId: string,
      title: string,
      totalPoints: number | null,
      endDate: string,
      imageUrl: string | null,
      slotsRemaining: number | null,
      description: string | null,
      category: QuestCategory,
      creatorId: string,
      createdAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
      } | null,
      version: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type RewardItemsByCategoryQueryVariables = {
  category?: RewardItemCategory | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRewardItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RewardItemsByCategoryQuery = {
  rewardItemsByCategory:  {
    __typename: "ModelRewardItemConnection",
    items:  Array< {
      __typename: "RewardItem",
      itemId: string,
      title: string,
      createdAt: string,
      cost: number | null,
      images: Array< string | null >,
      inventoryRemaining: number | null,
      description: string | null,
      tags: Array< string | null > | null,
      category: RewardItemCategory,
      availableAt: string | null,
      version: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateQuestSubscription = {
  onCreateQuest:  {
    __typename: "Quest",
    questId: string,
    title: string,
    totalPoints: number | null,
    endDate: string,
    imageUrl: string | null,
    slotsRemaining: number | null,
    description: string | null,
    category: QuestCategory,
    creatorId: string,
    createdAt: string,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        taskId: string,
        questId: string,
        description: string | null,
        position: number | null,
        module: Module | null,
        submodule: Submodule | null,
        points: number | null,
        remaining: number | null,
        completed: boolean | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type OnUpdateQuestSubscription = {
  onUpdateQuest:  {
    __typename: "Quest",
    questId: string,
    title: string,
    totalPoints: number | null,
    endDate: string,
    imageUrl: string | null,
    slotsRemaining: number | null,
    description: string | null,
    category: QuestCategory,
    creatorId: string,
    createdAt: string,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        taskId: string,
        questId: string,
        description: string | null,
        position: number | null,
        module: Module | null,
        submodule: Submodule | null,
        points: number | null,
        remaining: number | null,
        completed: boolean | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type OnDeleteQuestSubscription = {
  onDeleteQuest:  {
    __typename: "Quest",
    questId: string,
    title: string,
    totalPoints: number | null,
    endDate: string,
    imageUrl: string | null,
    slotsRemaining: number | null,
    description: string | null,
    category: QuestCategory,
    creatorId: string,
    createdAt: string,
    tasks:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        taskId: string,
        questId: string,
        description: string | null,
        position: number | null,
        module: Module | null,
        submodule: Submodule | null,
        points: number | null,
        remaining: number | null,
        completed: boolean | null,
        version: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
    version: number,
  } | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask:  {
    __typename: "Task",
    taskId: string,
    questId: string,
    quest:  {
      __typename: "Quest",
      questId: string,
      title: string,
      totalPoints: number | null,
      endDate: string,
      imageUrl: string | null,
      slotsRemaining: number | null,
      description: string | null,
      category: QuestCategory,
      creatorId: string,
      createdAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
      } | null,
      version: number,
    },
    description: string | null,
    position: number | null,
    module: Module | null,
    submodule: Submodule | null,
    points: number | null,
    remaining: number | null,
    moduleSpecificMetadata:  {
      __typename: "ModuleSpecificMetadata",
      username: string | null,
      name: string | null,
      completed: boolean | null,
      url: string | null,
      iosUrl: string | null,
      androidUrl: string | null,
    } | null,
    completed: boolean | null,
    version: number,
  } | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask:  {
    __typename: "Task",
    taskId: string,
    questId: string,
    quest:  {
      __typename: "Quest",
      questId: string,
      title: string,
      totalPoints: number | null,
      endDate: string,
      imageUrl: string | null,
      slotsRemaining: number | null,
      description: string | null,
      category: QuestCategory,
      creatorId: string,
      createdAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
      } | null,
      version: number,
    },
    description: string | null,
    position: number | null,
    module: Module | null,
    submodule: Submodule | null,
    points: number | null,
    remaining: number | null,
    moduleSpecificMetadata:  {
      __typename: "ModuleSpecificMetadata",
      username: string | null,
      name: string | null,
      completed: boolean | null,
      url: string | null,
      iosUrl: string | null,
      androidUrl: string | null,
    } | null,
    completed: boolean | null,
    version: number,
  } | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask:  {
    __typename: "Task",
    taskId: string,
    questId: string,
    quest:  {
      __typename: "Quest",
      questId: string,
      title: string,
      totalPoints: number | null,
      endDate: string,
      imageUrl: string | null,
      slotsRemaining: number | null,
      description: string | null,
      category: QuestCategory,
      creatorId: string,
      createdAt: string,
      tasks:  {
        __typename: "ModelTaskConnection",
        nextToken: string | null,
      } | null,
      version: number,
    },
    description: string | null,
    position: number | null,
    module: Module | null,
    submodule: Submodule | null,
    points: number | null,
    remaining: number | null,
    moduleSpecificMetadata:  {
      __typename: "ModuleSpecificMetadata",
      username: string | null,
      name: string | null,
      completed: boolean | null,
      url: string | null,
      iosUrl: string | null,
      androidUrl: string | null,
    } | null,
    completed: boolean | null,
    version: number,
  } | null,
};

export type OnCreateRewardItemSubscription = {
  onCreateRewardItem:  {
    __typename: "RewardItem",
    itemId: string,
    title: string,
    createdAt: string,
    cost: number | null,
    images: Array< string | null >,
    inventoryRemaining: number | null,
    description: string | null,
    tags: Array< string | null > | null,
    category: RewardItemCategory,
    availableAt: string | null,
    version: number,
  } | null,
};

export type OnUpdateRewardItemSubscription = {
  onUpdateRewardItem:  {
    __typename: "RewardItem",
    itemId: string,
    title: string,
    createdAt: string,
    cost: number | null,
    images: Array< string | null >,
    inventoryRemaining: number | null,
    description: string | null,
    tags: Array< string | null > | null,
    category: RewardItemCategory,
    availableAt: string | null,
    version: number,
  } | null,
};

export type OnDeleteRewardItemSubscription = {
  onDeleteRewardItem:  {
    __typename: "RewardItem",
    itemId: string,
    title: string,
    createdAt: string,
    cost: number | null,
    images: Array< string | null >,
    inventoryRemaining: number | null,
    description: string | null,
    tags: Array< string | null > | null,
    category: RewardItemCategory,
    availableAt: string | null,
    version: number,
  } | null,
};

export type OnCreateWalletBalanceSubscription = {
  onCreateWalletBalance:  {
    __typename: "WalletBalance",
    id: string,
    balance: number | null,
    version: number,
  } | null,
};

export type OnUpdateWalletBalanceSubscription = {
  onUpdateWalletBalance:  {
    __typename: "WalletBalance",
    id: string,
    balance: number | null,
    version: number,
  } | null,
};

export type OnDeleteWalletBalanceSubscription = {
  onDeleteWalletBalance:  {
    __typename: "WalletBalance",
    id: string,
    balance: number | null,
    version: number,
  } | null,
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction:  {
    __typename: "Transaction",
    transactionId: string,
    userId: string,
    transactionAmount: number | null,
    rewardItemId: string | null,
    taskId: string | null,
  } | null,
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction:  {
    __typename: "Transaction",
    transactionId: string,
    userId: string,
    transactionAmount: number | null,
    rewardItemId: string | null,
    taskId: string | null,
  } | null,
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction:  {
    __typename: "Transaction",
    transactionId: string,
    userId: string,
    transactionAmount: number | null,
    rewardItemId: string | null,
    taskId: string | null,
  } | null,
};
