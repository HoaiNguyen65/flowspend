import { useState } from "react";
import SearchInput from "../../../components/SearchInput";
import MainLayout from "../../../layouts/MainLayout";

function Transaction() {
  const [search, setSearch] = useState("");  
  
  return (
    <MainLayout labelHeader="Transactions">
      <div>
        <SearchInput value={search} placeholder={"Search transactions..."} onChange={setSearch} />        
      </div>
    </MainLayout>
  );
}

export default Transaction;
