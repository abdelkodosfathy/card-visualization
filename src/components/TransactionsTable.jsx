import React from 'react'
import { CustomTable } from './custom/Table'
import allTransactions from '@/transactions.json';
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import {
  sortTransactions,
  exportToExcel,
  exportToPDF,
} from "@/services/tableServices";
import {Circle} from './custom/Circle';
import ExportDropdown from './custom/ExportDropdown';

const TransactionsTable = () => {
  const [page, setPage] = useState(0);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const sortedTransactions = sortTransactions(allTransactions, sortConfig);

  // Filter transactions based on search query
  const filterTransactions = (transactions, query) => {
    if (!query) return transactions; // No query, return all transactions

    return transactions.filter((transaction) =>
      transaction.cardholder.toLowerCase().includes(query.toLowerCase()) ||
      transaction.amount.toString().includes(query) || 
      transaction.currency.toLowerCase().includes(query.toLowerCase())
    );
  };

  // Update the filtered transactions whenever searchQuery or other dependencies change
  const filteredTransactions = filterTransactions(sortedTransactions, searchQuery);

  useEffect(() => {
    setTransactions(filteredTransactions.slice(page * 10, page * 10 + 10));
  }, [page, sortConfig, searchQuery]);

  const handleSort = (key) => {
    setSortConfig((prev) =>
      prev.key === key
        ? { key, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" }
    );
  };

  const handleNext = () => {
    if (!checkLastPage()) setPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  const checkLastPage = () => {
    return (page + 1) * 10 >= allTransactions.length;
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <Circle radius="12rem" deg="180" classes="top-1 -left-12"/>
      <Circle radius="15rem" deg="0" classes="top-48 -right-[74px]"/>

      <div className='flex justify-between w-full my-2 z-[1]'>
        <div className='flex gap-2'>
          <Button className="bg-white/10 hover:bg-white/20 z-[1] backdrop-blur-lg">
            Transactions
          </Button>
          <Button className="bg-white/10 hover:bg-white/20 z-[1] backdrop-blur-lg">
            Issued cards
          </Button>
        </div>



        <div className="flex gap-2 z-[9]">
          {/* <Button
            className="bg-white/10 hover:bg-white/20"
            onClick={() => exportToExcel(filteredTransactions)}
          >
            Export to Excel
          </Button>
          <Button
            className="bg-white/10 hover:bg-white/20"
            onClick={() => exportToPDF(filteredTransactions)}
          >
            Export to PDF
          </Button> */}
                  {/* Use ExportDropdown Component */}
          <ExportDropdown
            transactions={sortedTransactions}
            exportToExcel={exportToExcel}
            exportToPDF={exportToPDF}
          />
          <div className="flex gap-2 items-center">
            <input
              type="text"
              className="p-2 rounded-md bg-white/10 text-white border-none"
              placeholder="Search by cardholder, amount, or currency..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        
      </div>

      <div className="p-5  backdrop-blur-lg  rounded-3xl text-white flex flex-col gap-2 bg-white/10 ">
        <CustomTable
          sortConfig={sortConfig}
          handleSort={handleSort}
          transactions={transactions}
        />
      </div>

      <div className="flex justify-between text-white items-center my-2">
        <p>
          Viewing {page * 10 + 1}- 
          {Math.min((page + 1) * 10, allTransactions.length)} of{" "}
          {allTransactions.length} results
        </p>
        <div className="flex gap-2">
          <Button className="bg-white/10 hover:bg-white/20" onClick={handlePrevious}>
            Previous
          </Button>
          <Button className="bg-white/10 hover:bg-white/20" onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionsTable