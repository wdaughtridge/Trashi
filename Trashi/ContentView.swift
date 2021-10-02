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
            if self.scannedCode != nil {
                // scannedCode is the UPC number
                Button {
                    self.scannedCode = nil
                } label: {
                    Text("Back")
                        .font(.headline)
                        .foregroundColor(Color.white)
                        .padding()
                        .background(Color(red: 43/255, green: 74/255, blue: 52/255))
                        .cornerRadius(40.0)
                }
                .padding(.vertical, 20.0)
                
                if ((self.scannedCode) != nil) {
                    Text("Code: " + self.scannedCode!)
                } else {
                    Text("Nothing found 😢")
                }
            } else {
                if (colorScheme == .dark) {
                    LogoDark()
                } else {
                    LogoLight()
                }
                
                Button {
                    self.isPresentingScanner = true
                } label: {
                    ScanBarcode()
                }
                .padding(.horizontal, 40.0)
                .sheet(isPresented: $isPresentingScanner) {
                    self.scannerSheet
                }
            }
        }
    }

    var scannerSheet: some View {
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
