/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRegulation = /* GraphQL */ `
  query GetRegulation($id: ID!) {
    getRegulation(id: $id) {
      id
      material
      suggestion
      region
      createdAt
      updatedAt
    }
  }
`;
export const listRegulations = /* GraphQL */ `
  query ListRegulations(
    $filter: ModelRegulationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegulations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        material
        suggestion
        region
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLogItem = /* GraphQL */ `
  query GetLogItem($id: ID!) {
    getLogItem(id: $id) {
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
export const listLogItems = /* GraphQL */ `
  query ListLogItems(
    $filter: ModelLogItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        timestamp
        upc
        deviceid
        region
        success
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      material
      description
      createdAt
      updatedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        material
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
