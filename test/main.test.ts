import * as filePaths from "../src"

test("Node path", () => {
  expect(filePaths.isAbsolute("/home/test1")).toBeTruthy()
})
