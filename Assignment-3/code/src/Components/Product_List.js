// const Product_List = ({employee}) => {

//   const ProductDetail = ({detailName,detail})=>
//   {
//     return (
//       <div className="ProductDetailWrapper">
//         <div className="ProductDetailName">{detailName}</div>
//         <div className="ProductDetail">{detail}</div>
//       </div>
//     )
//   }

//     return (
//       <div className="Product_List">
//         <div className="ProductInfoBoxWrapper">
//             <div className="ProductInfoBox"></div>
//         </div>    
            
//             <div className="EmployeeImg">
//                 <img src={employee.ProfileImg}/>
//             </div>

//             <div className="ProductDetail">
//                 <div className="EmployeeRole">{employee.EmpRole}</div>
//                 <div className="EmployeeInfo">{employee.info}</div>
//             </div>

//             <div className="ForwardBtn">{employee.Forword_arrow}</div>

//       </div>
//     );
//   };
  
// export default Product_List;
const Product_List = ({employee}) => {
    return <div className="Product_List">
  
        <div className="ProductInfoBoxWrapper">
            <div className="ProductInfoBox"></div>
        </div>    
          {/* <div className="role-info"> */}
            <div className="EmployeeImg">
                <img src={employee.ProfileImg}/>
            </div>
  
            <div className="ProductDetail">
                <div className="EmployeeRole">{employee.EmpRole}</div>
                <div className="EmployeeInfo">{employee.info}</div>
            </div>
          {/* </div> */}
  
            <div className="ForwardBtn">{employee.Forword_arrow}</div>
  
        </div>
  }
  export default Product_List;