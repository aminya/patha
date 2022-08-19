import * as filePaths from "../src/main"

test("Node path", () => {
  expect(filePaths.isAbsolute("/home/test1")).toBeTruthy()
})
