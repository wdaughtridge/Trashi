// swiftlint:disable all
import Amplify
import Foundation

// Contains the set of classes that conforms to the `Model` protocol. 

final public class AmplifyModels: AmplifyModelRegistration {
  public let version: String = "d7f9ca56c60ee34abf863d246babc7f9"
  
  public func registerModels(registry: ModelRegistry.Type) {
    ModelRegistry.register(modelType: Item.self)
  }
}