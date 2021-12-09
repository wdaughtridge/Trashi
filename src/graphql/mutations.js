/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRegulation = /* GraphQL */ `
  mutation CreateRegulation(
    $input: CreateRegulationInput!
    $condition: ModelRegulationConditionInput
  ) {
    createRegulation(input: $input, condition: $condition) {
      id
      material
      suggestion
      region
      createdAt
      updatedAt
    }
  }
`;
export const updateRegulation = /* GraphQL */ `
  mutation UpdateRegulation(
    $input: UpdateRegulationInput!
    $condition: ModelRegulationConditionInput
  ) {
    updateRegulation(input: $input, condition: $condition) {
      id
      material
      suggestion
      region
      createdAt
      updatedAt
    }
  }
`;
export const deleteRegulation = /* GraphQL */ `
  mutation DeleteRegulation(
    $input: DeleteRegulationInput!
    $condition: ModelRegulationConditionInput
  ) {
    deleteRegulation(input: $input, condition: $condition) {
      id
      material
      suggestion
      region
      createdAt
      updatedAt
    }
  }
`;
export const createLogItem = /* GraphQL */ `
  mutation CreateLogItem(
    $input: CreateLogItemInput!
    $condition: ModelLogItemConditionInput
  ) {
    createLogItem(input: $input, condition: $condition) {
      id
      timestamp
      upc
      deviceid
      region
      success
      createdAt
      updatedAt
    }
  }
`;
export const updateLogItem = /* GraphQL */ `
  mutation UpdateLogItem(
    $input: UpdateLogItemInput!
    $condition: ModelLogItemConditionInput
  ) {
    updateLogItem(input: $input, condition: $condition) {
      id
      timestamp
      upc
      deviceid
      region
      success
      createdAt
      updatedAt
    }
  }
`;
export const deleteLogItem = /* GraphQL */ `
  mutation DeleteLogItem(
    $input: DeleteLogItemInput!
    $condition: ModelLogItemConditionInput
  ) {
    deleteLogItem(input: $input, condition: $condition) {
      id
      timestamp
      upc
      deviceid
      region
      success
      createdAt
      updatedAt
    }
  }
`;
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      name
      material
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      name
      material
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      name
      material
      description
      createdAt
      updatedAt
    }
  }
`;
