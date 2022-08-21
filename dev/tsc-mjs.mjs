import { readdirSync } from "fs"
import { copyFile, rename } from "fs/promises"
import { join } from "path"

async function main() {
  const dir = "./dist"
  await Promise.all(
    readdirSync(dir).map(async (file) => {
      if (file.endsWith(".js")) {
        await rename(join(dir, file), join(dir, file.replace(".js", ".mjs")))
      } else if (file.endsWith(".d.ts")) {
        await copyFile(join(dir, file), join(dir, file.replace(".d.ts", ".d.mts")))
      }
    })
  )
}

await main()
