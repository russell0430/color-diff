import React, {
  useContext,
  createContext,
  ReactNode,
  useState,
  useMemo,
} from "react"
type NameType = string | null
type ExperimentType = 1 | 2 | 3 | null
type ContextType = {
  name: NameType
  setName: (user: NameType) => void
  experiment: ExperimentType
  setExperiment: (v: ExperimentType) => void
}
const Context = createContext({} as ContextType)

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [name, setName] = useState<NameType>("!!")
  const [experiment, setExperiment] = useState<ExperimentType>(1)
  const contextValue = useMemo(
    () => ({ name, setName, experiment, setExperiment }),
    [name, setName, experiment, setExperiment]
  )
  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

export const useUser = () => useContext(Context)
