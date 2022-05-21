
import Customer_Info from "./Customer_Info";
import Header from "./Header";
import Order_Info from "./Order_Info";
import Product_List from "./Product_List";


const Employee_Details = ({employee}) =>{

    return ( <div className="Employee_Details">
        <Header employee={employee}/>
        <Customer_Info employee={employee}/>
        <Order_Info employee={employee}/>
        <Product_List employee={employee}/>

    </div>
    );
};
export default Employee_Details;