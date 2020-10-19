import * as React from "react"
import Lottie from "react-lottie"
import SuccessAni from "../../../lotties/success-animation.json"
import FailedAni from "../../../lotties/failed.json"

interface Props {
  animation: string
}

export const SuccessAnimation: React.FC<Props> = ({ animation }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animation === "success" ? SuccessAni : FailedAni,
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
