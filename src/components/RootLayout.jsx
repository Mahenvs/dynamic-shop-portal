import { Outlet } from "react-router-dom"
import SideNav from "./SideNav"
import Layout from "./Layout"
  
export const RootLayout = ({children}) =>{
    return<>
      <Layout>
        {children}
      </Layout>
    </>
}