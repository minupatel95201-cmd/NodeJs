import { createContext, useState } from "react"

// save and make your data centerlize
export const DataContext = createContext();

const UserContext = ({ children }) => {
    const [centerdata, setCenterData] = useState("")

  return (
    <DataContext.Provider value = {{centerdata, setCenterData}}>
      <div>{ children }</div>  
    </DataContext.Provider>
    
  );
};

export default UserContext  