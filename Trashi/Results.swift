//
//  Results.swift
//  Trashi
//
//  Created by William Daughtridge on 10/21/21.
//

import Foundation

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
            
            Button {
                testREST()
                showingPopover = true
            } label: {
                RestRequest()
            }
            .padding(.horizontal, 40.0)
            .popover(isPresented: $showingPopover) {
                Text("Made a REST call.")
                    .font(.headline)
                    .padding()
            }
        }
    }
}

