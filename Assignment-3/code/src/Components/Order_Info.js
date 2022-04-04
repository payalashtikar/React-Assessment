const Order_Info = ({employee}) =>{
    const OrderDetail = ({detailName , detail}) => {
      return (
          <div className="OrderDetailWrapper">
              <div className="OrderDetailName">{detailName}</div>
              <div className="OrderDetail">{detail}</div>
          </div>
      );
  };
  
//   const bullet = (
//     <>
//     <span className="BulletIcon">{employee.Status}</span>
//     </>
//     );
      return (
        <div className="Order_Info">
            {/* Order_Info Part */}
            <OrderDetail detailName={"Status"} 
          detail={employee.Status}/>
  
          <OrderDetail detailName={"Door"} 
          detail={employee.Door}/>
  
          <OrderDetail detailName={"Time"} 
          detail={employee.Time} />
  
        </div>
      );
    };
    
  export default Order_Info;