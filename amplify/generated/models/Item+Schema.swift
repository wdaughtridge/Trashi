// swiftlint:disable all
import Amplify
import Foundation

extension Item {
  // MARK: - CodingKeys 
   public enum CodingKeys: String, ModelKey {
    case id
    case name
    case material
    case description
    case createdAt
    case updatedAt
  }
  
  public static let keys = CodingKeys.self
  //  MARK: - ModelSchema 
  
  public static let schema = defineSchema { model in
    let item = Item.keys
    
    model.pluralName = "Items"
    
    model.fields(
      .id(),
      .field(item.name, is: .required, ofType: .string),
      .field(item.material, is: .required, ofType: .string),
      .field(item.description, is: .optional, ofType: .string),
      .field(item.createdAt, is: .optional, isReadOnly: true, ofType: .dateTime),
      .field(item.updatedAt, is: .optional, isReadOnly: true, ofType: .dateTime)
    )
    }
}