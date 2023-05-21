import { useState } from "react";
import useFiles from "../../api/hooks/useFiles";
import TableRow from "./TableRow";

const Table = ({ searchText }) => {
  const { error, files, isLoading } = useFiles();
  const [selectAll, setSelectAll] = useState(false);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;
  const tableHeader = (
    <div className="table_header">
      <input
        type="checkbox"
        checked={selectAll}
        onChange={({ target: { checked } }) => setSelectAll(checked)}
      />
      <span className="flex-3">Name</span>
      <span className="flex-1">Owner</span>
      <span className="flex-2">labels</span>
      <span className="flex-2">Type</span>
      <span className="flex-2">Modified</span>
      <span className="flex-1">Action</span>
    </div>
  );
  const tableRows = files
    .filter((file) => file.Name?.includes?.(searchText) ?? true)
    .map((row) => <TableRow key={row.id} data={row} selectAll={selectAll} />);
  return (
    <div className="card">
      <h2 className="card_title">All items</h2>
      <div className="table">
        {tableHeader}
        {tableRows}
      </div>
    </div>
  );
};
export default Table;
