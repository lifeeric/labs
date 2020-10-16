import * as React from "react"
import Lottie from "react-lottie"
import SuccessAni from "../../../lotties/success-animation.json"

export const SuccessAnimation: React.FC = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: SuccessAni,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <div>
      <Lottie options={defaultOptions} height={150} width={150} />
    </div>
  )
}
