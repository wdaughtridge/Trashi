//
//  REST.swift
//  Trashi
//
//  Created by William Daughtridge on 10/12/21.
//

import Foundation

func testREST() -> Void {
    var request = URLRequest(url: URL(string: "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=computer")!)
    request.httpMethod = "GET"

    let session = URLSession.shared
    let task = session.dataTask(with: request, completionHandler: { data, response, error -> Void in
        print(response!)
        do {
            let json = try JSONSerialization.jsonObject(with: data!) as! Dictionary<String, AnyObject>
            print(json)
        } catch {
            print("error")
        }
    })

    task.resume()
}
