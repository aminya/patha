import { default as isPathInsideOrig } from "is-path-inside"

/**
 * Check if a path is inside another path.
 *
 * Note that relative paths are resolved against `process.cwd()` to make them absolute.
 *
 * This function does not check if the paths exist and it only works with strings.
 *
 * @example
 *
 * ```js
 * import { isPathInside } from "patha"
 *
 * isPathInside("a/b/c", "a/b")
 * //=> true
 *
 * isPathInside("a/b/c", "x/y")
 * //=> false
 *
 * isPathInside("a/b/c", "a/b/c")
 * //=> false
 *
 * isPathInside("/Users/some/dev/aa", "/Users/some")
 * //=> true
 * ```
 */
export function isPathInside(childPath: string, parentPath: string): boolean {
  return isPathInsideOrig(childPath, parentPath)
}
