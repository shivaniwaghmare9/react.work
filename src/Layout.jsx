
import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="product">Product</Link>
        <Link to="contact">Contact</Link>
        


        <hr />
           <Outlet/>
        <hr />

        www.Mycompany.com........
        </>
    )
}
export default Layout;