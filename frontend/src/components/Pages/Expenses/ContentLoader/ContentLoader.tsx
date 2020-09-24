import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width="100%"
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="15" rx="5" ry="5" width="800px" height="20" />
  </ContentLoader>
)

export default MyLoader
