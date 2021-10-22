//
//  TrashiApp.swift
//  Trashi
//
//  Created by William Daughtridge on 10/1/21.
//

import SwiftUI
import Amplify
import AWSDataStorePlugin
import AWSAPIPlugin

@main
struct TrashiApp: App {
    public init() {
        configureAmplify()
    }
    
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

func configureAmplify() {
    let models = AmplifyModels()
    let apiPlugin = AWSAPIPlugin(modelRegistration: models)
    let dataStorePlugin = AWSDataStorePlugin(modelRegistration: models)
    do {
        try Amplify.add(plugin: apiPlugin)
        try Amplify.add(plugin: dataStorePlugin)
        try Amplify.configure()
        print("Initialized Amplify");
    } catch {
        assert(false, "Could not initialize Amplify: \(error)")
    }
}
