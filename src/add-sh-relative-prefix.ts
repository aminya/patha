/**
 * Prefix a `./` for unix shell and nothing for `cmd`.
 *
 * @param path The given path
 * @returns The path with `./` added on Unix
 */
export function addShRelativePrefix(path: string) {
  if (process.platform === "win32") {
    return path
  }
  return `./${path}`
}
