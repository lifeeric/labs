const isBrowser = typeof window !== "undefined"

export const useLocalStorage = () => {
  const setItem = v => {
    isBrowser && window.localStorage.setItem("bioUser", JSON.stringify(v))
  }

  const getItem = () => {
    isBrowser && window.localStorage.getItem("gatsbyUser")
      ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
      : {}
  }
}
