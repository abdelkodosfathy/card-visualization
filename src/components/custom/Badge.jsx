import { Badge } from "@/components/ui/badge";
const statusClasses = {
  Active: "border-green-900 bg-green-200 text-green-800",
  Succeeded: "border-green-900 bg-green-200 text-green-800",
  Pending: "border-yellow-900 bg-yellow-200 text-yellow-800",
  Canceled: "border-gray-900 bg-gray-200 text-gray-800",
  Failed: "border-red-900 bg-red-200 text-red-800",
  Refunded: "border-blue-900 bg-blue-200 text-blue-800",
  Disputed: "border-purple-900 bg-purple-200 text-purple-800",
  Default: "border-gray-900 bg-gray-200 text-gray-800", // Default for unhandled statuses
};
const getStatusClass = (status) => statusClasses[status] || statusClasses.Default;

export default function StatusBadge({ status }) {
  return <Badge className={`${getStatusClass(status)} w-24 text-center border-none  rounded-full px-3 py-1 hover:outline-none hover:bg-prevent`}>
    <p className="m-auto">
    {status}
    </p>
    </Badge>;
}
