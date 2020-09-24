const isBrowser = typeof window !== "undefined"

export const useLocalStorage = () => {
  const setUser = (v: any) => {
    isBrowser && window.localStorage.setItem("bioUser", JSON.stringify(v))
  }

  const getUser = () =>
    isBrowser && window.localStorage.getItem("bioUser")
      ? JSON.parse(window.localStorage.getItem("bioUser")!)
      : {}
  return [getUser, setUser] as const
}
