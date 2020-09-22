/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import * as React from "react"

import { LocalProvider } from "./src/utils/authorized.tsx"
const wrapRootElement = ({ element }) => (
  <LocalProvider>{element}</LocalProvider>
)

export { wrapRootElement }
