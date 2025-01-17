import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import StatusBadge from "./Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export function CustomTable({ transactions, handleSort, sortConfig }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-white/20 hover:bg-white/10 rounded">
          <TableHead>
            <SotrableHead onClick={() => handleSort("amount")} name="Amount" sortConfig={sortConfig}/>
          </TableHead>
          <TableHead>
            <SotrableHead onClick={() => handleSort("currency")} name="Currency" sortConfig={sortConfig}/>
          </TableHead>
          <TableHead>
            <SotrableHead onClick={() => handleSort("cardholder")} name="Cardholder" sortConfig={sortConfig}/>
          </TableHead>
          <TableHead>
            <SotrableHead onClick={() => handleSort("status")} name="Status" sortConfig={sortConfig}/>
          </TableHead>
          <TableHead>
            <SotrableHead onClick={() => handleSort("created")} name="Created" sortConfig={sortConfig}/>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction, i) => (
          <TableRow className="hover:bg-white/10" key={i}>
            <TableCell  >{transaction.amount}</TableCell>
            <TableCell>{transaction.currency}</TableCell>
            <TableCell>{transaction.cardholder}</TableCell>
            <TableCell>
              <StatusBadge status={transaction.status} />
            </TableCell>
            <TableCell>{transaction.created}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}


const SotrableHead = ({name, sortConfig, onClick}) => {
  const sortingColors = {
    active:"text-white",
    notActive: "text-gray-400"
  }

  const isActive = sortConfig.key === name.toLowerCase();
  return (
    <div onClick={onClick} className="text-white cursor-pointer flex items-center w-fit">
    <p className={isActive ? "font-bold" : ""}>
    {name}
    </p>
    <div className="flex flex-col gap-0">
      <FontAwesomeIcon
        icon={faCaretUp}
        className={`${(sortConfig.direction === "asc" && isActive) ? sortingColors.active : sortingColors.notActive} ml-2 -my-1`}
      />
      <FontAwesomeIcon
        icon={faCaretDown}
        className={`${(sortConfig.direction === "desc" && isActive)? sortingColors.active : sortingColors.notActive} ml-2 -my-1`}
      />
    </div>
  </div>
  )
}