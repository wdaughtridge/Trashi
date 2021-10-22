//
//  Elements.swift
//  Trashi
//
//  Created by William Daughtridge on 10/1/21.
//

import SwiftUI

struct ScanBarcode: View {
    var body: some View {
        Text("Scan Barcode")
            .font(.headline)
            .foregroundColor(Color.white)
            .padding()
            .frame(minWidth: 0, maxWidth: .infinity)
            .background(Color(red: 43/255, green: 74/255, blue: 52/255))
            .cornerRadius(40.0)
    }
}

struct BackButton: View {
    var body: some View {
        Text("Back")
            .font(.headline)
            .foregroundColor(Color.white)
            .padding()
            .background(Color(red: 43/255, green: 74/255, blue: 52/255))
            .cornerRadius(40.0)
    }
}

struct LogoDark: View {
    var body: some View {
        Image("Logo - dark")
            .resizable()
            .scaledToFit()
            .padding(.horizontal, 100.0)
    }
}

struct LogoLight: View {
    var body: some View {
        Image("Logo")
            .resizable()
            .scaledToFit()
            .padding(.horizontal, 100.0)
    }
}
