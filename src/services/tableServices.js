import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";

/**
 * Sort transactions based on a key and direction.
 */
export const sortTransactions = (transactions, sortConfig) => {
  return [...transactions].sort((a, b) => {
    if (sortConfig.key === null) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (typeof aValue === "string") {
      return (
        aValue.localeCompare(bValue) * (sortConfig.direction === "asc" ? 1 : -1)
      );
    }
    return (aValue - bValue) * (sortConfig.direction === "asc" ? 1 : -1);
  });
};

/**
 * Export sorted transactions to an Excel file.
 */
export const exportToExcel = (data, filename = "transactions.xlsx") => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(blob, filename);
};

/**
 * Export sorted transactions to a PDF file.
 */
export const exportToPDF = (data, filename = "transactions.pdf") => {
  const doc = new jsPDF();
  const tableColumn = ["Amount", "Currency", "Cardholder", "Status", "Created"];
  const tableRows = data.map((transaction) => [
    transaction.amount,
    transaction.currency,
    transaction.cardholder,
    transaction.status,
    transaction.created,
  ]);

  doc.text("Transactions Report", 14, 10);
  doc.autoTable({
    head: [tableColumn],
    body: tableRows,
    startY: 20,
  });
  doc.save(filename);
};
