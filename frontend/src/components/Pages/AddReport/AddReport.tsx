import * as React from "react"
import { Sidebar } from "../Dashboard/Sidebar/Sidebar"
import { Header } from "../Dashboard/Header/Header"
import { MainContent } from "../../UI/MainContent/MainContent"
import { SubHeader } from "../../UI/SubHeader/SubHeader"
import { Box } from "../../UI/Box/Box"
import { Container } from "./Container/Container"
import { customHook } from "../../../utils/customHook"
import { stateVar } from "../../../utils/cache"
import { GET_TEST_TEMPLATE } from "../../../utils/gql"
import { useQuery } from "@apollo/client"
import { useEffect } from "react"

export const AddReport: React.FC = () => {
  const { currentUser, tests } = customHook()
  const { data, loading } = useQuery(GET_TEST_TEMPLATE, {
    variables: { id: currentUser._id },
  })

  useEffect(() => {
    data &&
      stateVar({
        ...stateVar(),
        tests: data.getTestTemplate,
      })
  }, [data])
  console.log(data, tests)

  return (
    <>
      <div>
        <Sidebar />
        <Header />
      </div>
      <MainContent>
        <SubHeader leftHeader="Add New Report" />
        <Box>
          <Container />
        </Box>
      </MainContent>
    </>
  )
}
