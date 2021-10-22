//
//  ContentView.swift
//  Trashi
//
//  Created by William Daughtridge on 10/1/21.
//

import SwiftUI
import CodeScanner

class ScannedCodeHelper: ObservableObject {
    @Published var scannedCode: String? = nil
}

struct ContentView: View {
    @Environment(\.colorScheme) var colorScheme
    @ObservedObject private var scannedCodeHelper = ScannedCodeHelper()
    @State private var isPresentingScanner = false

    var body: some View {
        VStack {
            if (scannedCodeHelper.scannedCode != nil) {
                // Display results if scanning of code successful
                ResultsView(scannedCodeHelper: self.scannedCodeHelper)
            } else {
                // Change logo depending on dark/light mode
                if (colorScheme == .dark) {
                    LogoDark()
                } else {
                    LogoLight()
                }
                
                // Pull up camera sheet for scanning barcode
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
                    scannedCodeHelper.scannedCode = code
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
