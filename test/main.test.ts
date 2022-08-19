import { name, isAbsolute, join, normalizeTrim, removeExt, replaceExt, addNameSuffix, addNamePrefix } from "../src"

test("Node path", () => {
  expect(isAbsolute("/home/test1")).toBeTruthy()
})

test("normalizeTrim", () => {
  expect(normalizeTrim("foo/bar//baz/asdf/hello/../")).toBe(join("foo", "bar", "baz", "asdf"))
})

test("name", () => {
  expect(name("path/to/file.md")).toBe("file.md")
  expect(name("path/to/file.md", false)).toBe("file")
})

test("replaceExt", () => {
  expect(replaceExt("path/to/file.md", ".html")).toBe(join("./path", "to", "file.html"))
})

test("removeExt", () => {
  expect(removeExt("some/dir/file.ext")).toBe("some/dir/file")
})

test("addNameSuffix", () => {
  expect(addNameSuffix("path/to/file-name.ext", "-old")).toBe(join("path", "to", "file-name-old.ext"))

  expect(addNameSuffix("path/to/file-name.ext", ".test")).toBe(join("path", "to", "file-name.test.ext"))
})

test("addNamePrefix", () => {
  expect(addNamePrefix("path/to/file-name.ext", "new-")).toBe(join("path", "to", "new-file-name.ext"))
})
