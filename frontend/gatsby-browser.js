/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import * as React from "react"
import { LocalProvider } from "./src/utils/authorized.tsx"
require("typeface-poppins")

const wrapRootElement = ({ element }) => (
  <LocalProvider>{element}</LocalProvider>
)

export { wrapRootElement }
