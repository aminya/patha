/**
 * Add bin extension to the given binary name.
 *
 * @example
 *
 * ```js
 * import { addExeExt } from "patha"
 *
 * addExeExt("path/to/file-name") // gives "path/to/file-name.exe" on Windows and "path/to/file-name" on others
 * ```
 *
 * @param name The name you want to add the shell extension to
 * @param win_ext Defaults to `.exe` on Windows
 * @param unix_ext Defaults to `""` On other platforms.
 */
export function addExeExt(name: string, win_ext = ".exe", unix_ext = "") {
  if (process.platform === "win32") {
    return `${name}${win_ext}`
  }
  return `${name}${unix_ext}`
}
