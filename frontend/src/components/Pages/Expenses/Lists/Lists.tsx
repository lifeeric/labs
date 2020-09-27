import * as React from "react"
import { useState } from "react"
import { useQuery } from "@apollo/client"
import { GET_EXPENSES_LIST } from "../../../../utils/gql"
import { customHook } from "../../../../utils/customHook"
import { Model } from "../../../UI/Model/Model"
import { Item } from "../Item/Item"
import { SimpleButton } from "../../../UI/SimpleButton/SimpleButton"
import { ItemLoading } from "../ItemLoading/ItemLoading"

import "./Lists.scss"

interface Props {}

export const Lists: React.FC<Props> = React.memo(() => {
  const { currentUser } = customHook()
  const { data, loading, error } = useQuery(GET_EXPENSES_LIST, {
    variables: { id: currentUser._id },
  })
  const [isModel, setIsModel] = useState<boolean>(false)
  const [dataModel, setDataModel] = useState<any>(null)

  const openModelHandler = <T extends any>(data: T): void => {
    setIsModel(true)
    setDataModel(data)
  }

  const closeModelHandler = (): void => {
    setIsModel(false)
  }

  if (error) return <p>Error</p>
  let renderingData = <ItemLoading />

  if (data)
    renderingData = data.getExpenses.map((item: any) => (
      <tr className="lists__row" key={item.id}>
        <Item {...item} openModelHandler={() => openModelHandler(item)} />
      </tr>
    ))

  return (
    <>
      <div className="lists">
        <table className="lists__table">{renderingData}</table>
      </div>

      <Model isOpen={isModel} closeModel={closeModelHandler}>
        <h2 className="model__title">{dataModel.name}</h2>
        <p className="model__price">Rs. {dataModel.price}</p>
        <span className="model__date">
          {new Date(dataModel.date).toLocaleString()}
        </span>
        <p className="model__body">{dataModel.description}</p>
        <div className="model__action">
          <SimpleButton onClick={closeModelHandler} />
        </div>
      </Model>
    </>
  )
})
