//
//  Images.swift
//  Trashi
//
//  Created by William Daughtridge on 10/1/21.
//

import SwiftUI

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
