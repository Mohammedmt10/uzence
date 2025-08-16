import { useEffect, useState } from "react";

interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[ ];
    loading?: boolean;
    selectable?: boolean;
    onRowSelect?: (selectedRows: T[]) => void;
}

interface Column<T> {
    key: string;
    title: string;
    dataIndex: keyof T;
    sortable?: boolean;
}


export default function DataTables<T>(props : DataTableProps<T>) {
    const [selectedRows, setSelectedRows] = useState<T[]>([]);
    
    useEffect(() => {
        if (props.onRowSelect) {
        props.onRowSelect(selectedRows);
        }
    }, [selectedRows, props.onRowSelect]);

    const checkHandler = (row : T) => {
        const exists = selectedRows.includes(row);
        const update = exists ? selectedRows.filter(r=> r != row) : [...selectedRows , row];

        setSelectedRows(update);
    }
    return <div>
        <table>
            {props.selectable && <th className="px-2 border-1">Select</th>}
            {props.columns.map((col) => (
                <th key={col.key} aria-label={col.key} className="px-10 border-1">{col.title}</th>
            ))}
            {props.data.map((row , rowIndex) => (
                <tr key={rowIndex}>
                    {props.selectable && <td className="text-center border-1">
                         <input type="checkbox" checked={selectedRows.includes(row)} onChange={() => checkHandler(row)} />
                    </td>}
                        {props.columns.map((col) => (
                            <td aria-label={String(row[col.dataIndex])} className="px-10 border-1">{String(row[col.dataIndex])}</td>
                        ))}
                </tr>
                
            ))}
        </table>
    </div>
}