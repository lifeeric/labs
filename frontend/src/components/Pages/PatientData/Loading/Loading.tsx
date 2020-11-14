import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width="100%"
    height={20}
    viewBox="0"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="6" ry="6" width="101" height="15" />
  </ContentLoader>
)

export default MyLoader
