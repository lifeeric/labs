import React from "react"
import { Helmet } from "react-helmet"

export const HelmetComp: React.FC = () => {
  return (
    <div className="application">
      <Helmet>
        <script
          src="https://widget.cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
        ></script>
      </Helmet>
    </div>
  )
}
