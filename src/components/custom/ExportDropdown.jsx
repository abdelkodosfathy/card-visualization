// ExportDropdown.js
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component

const ExportDropdown = ({ transactions, exportToExcel, exportToPDF }) => {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button className="bg-white/10 hover:bg-white/20">Export</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white/20 text-white shadow-md rounded-md p-2 mt-1">
        <DropdownMenuItem
          className="cursor-pointer   hover:underline"
          onClick={() => exportToExcel(transactions)}
        >
          Export to Excel
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer hover:underline"
          onClick={() => exportToPDF(transactions)}
        >
          Export to PDF
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ExportDropdown;
