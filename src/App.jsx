import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import CardTab from "./components/Tabs/CardTab";
import TransactionsTable from "./components/TransactionsTable";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function App() {
  console.log("1.0");
  
  return (
    <Router basename="/card-visualization">
      <div className="bg-[rgb(0,14,33)] min-h-screen	 p-9 text-white">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Navigate to="/card-tab" />} />
          <Route path="/card-tab" element={<CardTab />} />
          <Route path="/transactions-table" element={<TransactionsTable />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;


const NavBar = () => {
  return (
    <nav
      className="absolute flex left-1/2 -translate-x-1/2 top-1 gap-2 z-[9] "
    >
      <Tabs defaultValue="card-tab">
        <TabsList>
          <Link to="/card-tab">
            <TabsTrigger value="card-tab">Card Tab</TabsTrigger>
          </Link>
          <Link to="/transactions-table">
            <TabsTrigger value="transactions-table">Transactions Table</TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>
    </nav>
  );
};