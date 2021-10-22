//
//  ResultsView.swift
//  Trashi
//
//  Created by William Daughtridge on 10/22/21.
//

import SwiftUI
import Amplify

struct ResultsView: View {
    @ObservedObject var scannedCodeHelper: ScannedCodeHelper
    
    var body: some View {
        VStack {
            // Query DB and return results
            performQuery()
            
            Button {
                scannedCodeHelper.scannedCode = nil
            } label: {
                BackButton()
            }
            .padding(.vertical, 20.0)
        }
    }
    
    func cardItem(key: String!, val: String!) -> some View {
        return HStack {
            Text(key).foregroundColor(Color.white).padding()
            Spacer()
            Text(val).padding().foregroundColor(Color.white).background(Color.green).cornerRadius(40.0)
        }.padding().background(Color.gray).cornerRadius(40.0)
    }
    
    func performQuery() -> some View {
        var name: String?
        var material: String?
        var description: String?
        
        // Check DB for UPC code
        Amplify.DataStore.query(Item.self,
                                where: Item.keys.id.eq(scannedCodeHelper.scannedCode)) { result in
            switch(result) {
            case .success(let items):
                for item in items {
                    name = item.name
                    material = item.material
                    if let itemDescription = item.description {
                        description = itemDescription
                    }
                }
            case .failure(let error):
                print("Could not query DataStore: \(error)")
            }
        }

        return VStack {
            // Found something in DB
            if name != nil {
                Text("Results").font(.largeTitle).bold()
                
                cardItem(key: "Name", val: name)
                cardItem(key: "Material", val: material)
                if description != nil {
                    cardItem(key: "Description", val: description)
                }
                
                Text("How To Recycle").font(.largeTitle).bold().padding(.top)
                
                Spacer()
            } else { // Nothing in DB
                Text("🦖Uh oh! Nothing found.").font(.largeTitle).padding().foregroundColor(Color.white).background(Color.green).cornerRadius(40.0)
            }
        }
    }
}

struct ResultsView_Previews: PreviewProvider {
    static var previews: some View {
//        ResultsView()
        Text("Results Preview")
    }
}
