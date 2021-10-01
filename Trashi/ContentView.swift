//
//  ContentView.swift
//  Trashi
//
//  Created by William Daughtridge on 10/1/21.
//

import SwiftUI
import CodeScanner

struct ContentView: View {
    @Environment(\.colorScheme) var colorScheme
    @State var isPresentingScanner = false
    @State var scannedCode: String?

    var body: some View {
        VStack {
            if (colorScheme == .dark) {
                Image("Logo - dark")
                    .resizable()
                    .scaledToFit()
                    .padding(.horizontal, 100.0)
            } else {
                Image("Logo")
                    .resizable()
                    .scaledToFit()
                    .padding(.horizontal, 100.0)
            }
            
            Button {
                self.isPresentingScanner = true
            } label: {
                Text("Scan Barcode")
                            .font(.headline)
                            .foregroundColor(Color.white)
                            .padding()
                            .frame(minWidth: 0, maxWidth: .infinity)
                            .background(Color(red: 43/255, green: 74/255, blue: 52/255))
                            .cornerRadius(40.0)
            }
            .padding(.horizontal, 40.0)
            .sheet(isPresented: $isPresentingScanner) {
                self.scannerSheet
            }
        }
    }

    var scannerSheet : some View {
        CodeScannerView(
            codeTypes: [.code39, .code128, .code93, .upce, .code39Mod43, .ean13, .ean8],
            completion: { result in
                if case let .success(code) = result {
                    self.scannedCode = code
                    self.isPresentingScanner = false
                }
            }
        )
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
