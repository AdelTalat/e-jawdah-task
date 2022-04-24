import Sidebar from "./layout/Sidebar/Sidebar";
import CommercialRecords from "./pages/CommercialRecords/CommercialRecords";

const App = () => {

  return (
    <div className="container-fluid">
             
      <div className="row">
        <div className="col-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-9">
          <main className="mt-50">
            <CommercialRecords></CommercialRecords>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
