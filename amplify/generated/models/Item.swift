// swiftlint:disable all
import Amplify
import Foundation

public struct Item: Model {
  public let id: String
  public var name: String
  public var material: String
  public var description: String?
  public var createdAt: Temporal.DateTime?
  public var updatedAt: Temporal.DateTime?
  
  public init(id: String = UUID().uuidString,
      name: String,
      material: String,
      description: String? = nil) {
    self.init(id: id,
      name: name,
      material: material,
      description: description,
      createdAt: nil,
      updatedAt: nil)
  }
  internal init(id: String = UUID().uuidString,
      name: String,
      material: String,
      description: String? = nil,
      createdAt: Temporal.DateTime? = nil,
      updatedAt: Temporal.DateTime? = nil) {
      self.id = id
      self.name = name
      self.material = material
      self.description = description
      self.createdAt = createdAt
      self.updatedAt = updatedAt
  }
}