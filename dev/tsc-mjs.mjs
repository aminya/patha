import { readdirSync } from "fs"
import { rename } from "fs/promises"
import { join } from "path"

async function main() {
  const dir = "./dist/node"
  await Promise.all(
    readdirSync(dir).map((file) => {
      return rename(join(dir, file), join(dir, file.replace(".js", ".mjs")))
    })
  )
}

await main()
