const Customer_Info = ({employee}) => {

    const CustomerDetail = ({detailName , detail}) => {
      return (
        <div className="CustomerDetailWrapper">
            <span className="CustomerDetailName">{detailName}</span>
            <span className="CustomerDetail">{detail}</span>
        </div>
      );
    };
  
      return (
        <div className="Customer_Info">
            {/* Customer_Info Part */}
  
            <CustomerDetail detailName={"Appointment : "} detail={employee.Appointement}/>
            <CustomerDetail detailName={"Email : "} detail={employee.Email}/>
            <CustomerDetail detailName={"Phone : "} detail={employee.Phone} />  
  
        </div>
      );
    };
  export default Customer_Info;
  