import * as React from "react"
import { SimpleButton } from "../../../UI/SimpleButton/SimpleButton"
import "./ModelData.scss"

interface Props {
  dataModel: any
  closeModelHandler: () => void
}

export const ModelData: React.FC<Props> = React.memo(
  ({ dataModel, closeModelHandler }) => {
    if (!dataModel) return null

    return (
      <>
        <h2 className="model__title">{dataModel.name}</h2>
        <p className="model__price">Rs. {dataModel.price}</p>
        <span className="model__date">
          {new Date(dataModel.date).toLocaleString()}
        </span>
        <p className="model__body">{dataModel.description}</p>
        <div className="model__action">
          <SimpleButton onClick={closeModelHandler} />
        </div>
      </>
    )
  }
)
