/**
 * Add a native shell extension to the given name.
 *
 * @example
 *
 * ```js
 * import { addShExt } from "patha"
 *
 * addShExt("path/to/file-name") // gives "path/to/file-name.cmd" on Windows and "path/to/file-name.sh" on others
 *
 * addShExt("path/to/file-name", ".bat") // gives "path/to/file-name.bat" on Windows and "path/to/file-name.sh" on others
 * ```
 *
 * @param name The name you want to add the shell extension to
 * @param win_ext `.cmd` on Windows
 * @param other_ext `.sh` On others.
 * @returns The file path with the shell extension added
 */
export function addShExt(name: string, win_ext = ".cmd", other_ext = ".sh") {
  if (process.platform === "win32") {
    return `${name}${win_ext}`
  }
  return `${name}${other_ext}`
}
