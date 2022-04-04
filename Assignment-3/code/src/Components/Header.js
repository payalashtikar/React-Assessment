function Header({employee}) {
    return (
      <div className="Header">
          {/* Header Part */}

          <div className="HeaderNavigaator">
            <div className="backPressBtn">{employee.Backword_arrow}</div>
          </div>

          <div className="HeaderContent">
            <div className="EmployeeName">{employee.name}</div>
            <div className="EmployeeId">{employee.id}</div>
          </div>
          
          <div className="PrintBtn">
            <button>Print</button>
          </div>
      </div>
      
    );
  };
export default Header;