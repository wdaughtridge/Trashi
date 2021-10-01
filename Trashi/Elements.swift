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
