import * as React from "react"
import { useState } from "react"
import { useQuery } from "@apollo/client"
import { GET_EXPENSES_LIST } from "../../../../utils/gql"
import { customHook } from "../../../../utils/customHook"
import { Model } from "../../../UI/Model/Model"
import { Item } from "../Item/Item"
import { ItemLoading } from "../ItemLoading/ItemLoading"
import { ModelData } from "../ModelData/ModelData"

import "./Lists.scss"

interface Props {}

export const Lists: React.FC<Props> = React.memo(() => {
  const { currentUser } = customHook()
  const { data, loading, error } = useQuery(GET_EXPENSES_LIST, {
    variables: { id: currentUser._id },
    fetchPolicy: "network-only",
  })
  const [isModel, setIsModel] = useState<boolean>(false)
  const [dataModel, setDataModel] = useState<any>(null)

  if (error) return <p>Error</p>
  let renderingData: any = <ItemLoading />

  if (data)
    renderingData = [...data.getExpenses].reverse().map((item: any) => (
      <tr className="lists__row" key={item.id}>
        <Item {...item} openModelHandler={() => openModelHandler(item)} />
      </tr>
    ))

  if (data && data.getExpenses.length <= 0) {
    renderingData = <p>Seem you don't have enough data yet!</p>
  }

  const openModelHandler = <T extends any>(data: T): void => {
    setIsModel(true)
    setDataModel(data)
  }

  const closeModelHandler = (): void => {
    setIsModel(false)
  }

  return (
    <>
      <div className="lists">
        <table className="lists__table">{renderingData}</table>
      </div>

      <Model isOpen={isModel} closeModel={closeModelHandler}>
        <ModelData
          dataModel={dataModel}
          closeModelHandler={closeModelHandler}
        />
      </Model>
    </>
  )
})
