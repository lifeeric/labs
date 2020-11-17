import * as React from "react"
import { useState } from "react"
import { Box } from "../../UI/Box/Box"
import { MainContent } from "../../UI/MainContent/MainContent"
import { SubHeader } from "../../UI/SubHeader/SubHeader"
import { Header } from "../Dashboard/Header/Header"
import { Sidebar } from "../Dashboard/Sidebar/Sidebar"
import { Upload } from "./Upload/Upload"

interface Props {}

export const AddTemplate: React.FC<Props> = ({}) => {
  const [state, setState] = useState<boolean | undefined>(undefined)

  return (
    <>
      <div>
        <Sidebar />
        <Header />
      </div>
      <MainContent>
        <SubHeader leftHeader="Add new Template" />
        <Box>
          <Upload />
        </Box>
      </MainContent>
    </>
  )
}
