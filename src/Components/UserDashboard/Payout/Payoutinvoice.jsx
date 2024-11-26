import React from "react";
import logo from "../../../assets/images/udbhab_icon.png";
import "./Payoutinvoice.css";

const Payoutinvoice = () => {
  return (
    <>
       <div className="voucher-container">
      <header className="voucher-header">
      <div className="row">
        <div className="col-lg-4">
            <img src={logo} style={{width:"150px"}}/>
        </div>
        <div className="col-lg-8">
        <h1>Udbhab MARKETING PVT. LTD</h1>
        <p>(AN ISO 9001-2015 CERTIFIED COMPANY)</p>
        <p>Indrira nagar Sodepur, North 24 Parganas. Kol-700110
          
        </p>
        
        <p>Email: info.ecofynity@gmail.com</p>
        <p>Web: www.udbhab.com</p>
        </div>
      </div>
        
      </header>

      <section className="voucher-section">
        <h2>PAYMENT VOUCHER (MONTH: October 2024) (From: 01-10-2024 To: 31-10-2024)</h2>
        <div className="table-responsive">
        <table className="voucher-table">
          <tbody>
            <tr>
              <td><strong>Distributor ID</strong></td>
              <td>EM46964285</td>
              <td><strong>Distributor Name</strong></td>
              <td>AGRAJ PRADHAN</td>
            </tr>
            <tr>
              <td><strong>Rank</strong></td>
              <td>DOUBLE CROWN AMBASSADOR</td>
              <td><strong>PAN</strong></td>
              <td>BBKPP9014R</td>
            </tr>
          </tbody>
        </table>
        </div>
      </section>

      <section className="voucher-section">
        <h2>BUSINESS DETAILS (MONTH: October 2024) (From: 01-10-2024 To: 31-10-2024)</h2>
        <table className="voucher-table">
          <tbody>
            <tr>
              <td><strong>Matching BV</strong></td>
              <td>584142</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="voucher-section">
        <h2>DISTRIBUTOR'S INCOME DETAILS</h2>
        <table className="voucher-table">
          <thead>
            <tr>
              <th>Bonus Type</th>
              <th>Status</th>
              <th>Points</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Self Performance Bonus</td>
              <td>Y</td>
              <td>142.00</td>
              <td>58414.20</td>
            </tr>
            <tr>
              <td>Team Bonus</td>
              <td>Y</td>
              <td>-</td>
              <td>2080.00</td>
            </tr>
            <tr>
              <td>Team Building Bonus</td>
              <td>Y</td>
              <td>-</td>
              <td>48420.00</td>
            </tr>
            {/* Add other rows similarly */}
            <tr>
              <td><strong>Total Income</strong></td>
              <td>-</td>
              <td>-</td>
              <td>204246.2</td>
            </tr>
            <tr>
              <td><strong>TDS</strong></td>
              <td>-</td>
              <td>-</td>
              <td>10212.31</td>
            </tr>
            <tr>
              <td><strong>Total Income (After Deduction)</strong></td>
              <td>-</td>
              <td>-</td>
              <td>194033.89</td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer className="voucher-footer">
        <p>
          Note: If the PAN Number is not updated with our system, then the rate of
          TDS deduction will be 20%. Service tax will be paid by the Distributor
          themselves.
        </p>
      </footer>
    </div>

    </>
  );
};

export default Payoutinvoice;
