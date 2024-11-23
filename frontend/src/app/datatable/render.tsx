"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data: Data[] = [
    {
        date: '2013-01-15',
        act_symbol: 'D',
        period: 'Year',
        cash_and_equivalents: 2400000000,
        receivables: 950000000,
        notes_receivable: 0,
        inventories: 1030000000,
        other_current_assets: 360000000,
        total_current_assets: 4740000000,
        net_property_and_equipment: 1170000000,
        investments_and_advances: 110000000,
        other_non_current_assets: 0,
        deferred_charges: 0,
        intangibles: 4150000000,
        deposits_and_other_assets: 530000000,
        total_asset: 10600000000,
        lol: 'N',
        lmao: "Y"
      },
      {
        date: '2014-04-20',
        act_symbol: 'E',
        period: 'Year',
        cash_and_equivalents: 2450000000,
        receivables: 980000000,
        notes_receivable: 0,
        inventories: 1040000000,
        other_current_assets: 370000000,
        total_current_assets: 4840000000,
        net_property_and_equipment: 1180000000,
        investments_and_advances: 112000000,
        other_non_current_assets: 0,
        deferred_charges: 0,
        intangibles: 4180000000,
        deposits_and_other_assets: 540000000,
        total_asset: 10700000000,
      },
      {
        date: '2015-07-10',
        act_symbol: 'F',
        period: 'Year',
        cash_and_equivalents: 2500000000,
        receivables: 1000000000,
        notes_receivable: 0,
        inventories: 1050000000,
        other_current_assets: 380000000,
        total_current_assets: 4940000000,
        net_property_and_equipment: 1190000000,
        investments_and_advances: 114000000,
        other_non_current_assets: 0,
        deferred_charges: 0,
        intangibles: 4210000000,
        deposits_and_other_assets: 550000000,
        total_asset: 10800000000,
      },
      {
        date: '2016-09-05',
        act_symbol: 'G',
        period: 'Year',
        cash_and_equivalents: 2550000000,
        receivables: 1020000000,
        notes_receivable: 0,
        inventories: 1060000000,
        other_current_assets: 390000000,
        total_current_assets: 5040000000,
        net_property_and_equipment: 1200000000,
        investments_and_advances: 116000000,
        other_non_current_assets: 0,
        deferred_charges: 0,
        intangibles: 4240000000,
        deposits_and_other_assets: 560000000,
        total_asset: 10900000000,
      },
      {
        date: '2017-11-22',
        act_symbol: 'H',
        period: 'Year',
        cash_and_equivalents: 2600000000,
        receivables: 1040000000,
        notes_receivable: 0,
        inventories: 1070000000,
        other_current_assets: 400000000,
        total_current_assets: 5140000000,
        net_property_and_equipment: 1210000000,
        investments_and_advances: 118000000,
        other_non_current_assets: 0,
        deferred_charges: 0,
        intangibles: 4270000000,
        deposits_and_other_assets: 570000000,
        total_asset: 11000000000,
      },
      {
        date: '2018-02-14',
        act_symbol: 'I',
        period: 'Year',
        cash_and_equivalents: 2650000000,
        receivables: 1060000000,
        notes_receivable: 0,
        inventories: 1080000000,
        other_current_assets: 410000000,
        total_current_assets: 5240000000,
        net_property_and_equipment: 1220000000,
        investments_and_advances: 120000000,
        other_non_current_assets: 0,
        deferred_charges: 0,
        intangibles: 4300000000,
        deposits_and_other_assets: 580000000,
        total_asset: 11100000000,
      },
      {
        date: '2019-05-30',
        act_symbol: 'J',
        period: 'Year',
        cash_and_equivalents: 2700000000,
        receivables: 1080000000,
        notes_receivable: 0,
        inventories: 1090000000,
        other_current_assets: 420000000,
        total_current_assets: 5340000000,
        net_property_and_equipment: 1230000000,
        investments_and_advances: 122000000,
        other_non_current_assets: 0,
        deferred_charges: 0,
        intangibles: 4330000000,
        deposits_and_other_assets: 590000000,
        total_asset: 11200000000,
      },
      {
        date: '2020-08-18',
        act_symbol: 'K',
        period: 'Year',
        cash_and_equivalents: 2750000000,
        receivables: 1100000000,
        notes_receivable: 0,
        inventories: 1100000000,
        other_current_assets: 430000000,
        total_current_assets: 5440000000,
        net_property_and_equipment: 1240000000,
        investments_and_advances: 124000000,
        other_non_current_assets: 0,
        deferred_charges: 0,
        intangibles: 4360000000,
        deposits_and_other_assets: 600000000,
        total_asset: 11300000000,
      },
      {
        date: '2021-11-02',
        act_symbol: 'L',
        period: 'Year',
        cash_and_equivalents: 2800000000,
        receivables: 1120000000,
        notes_receivable: 0,
        inventories: 1110000000,
        other_current_assets: 440000000,
        total_current_assets: 5540000000,
        net_property_and_equipment: 1250000000,
        investments_and_advances: 126000000,
        other_non_current_assets: 0,
        deferred_charges: 0,
        intangibles: 4390000000,
        deposits_and_other_assets: 610000000,
        total_asset: 11400000000,
      },
      {
        date: '2022-12-15',
        act_symbol: 'M',
        period: 'Year',
        cash_and_equivalents: 2850000000,
        receivables: 1140000000,
        notes_receivable: 0,
        inventories: 1120000000,
        other_current_assets: 450000000,
        total_current_assets: 5640000000,
        net_property_and_equipment: 1260000000,
        investments_and_advances: 128000000,
        other_non_current_assets: 0,
        deferred_charges: 0,
        intangibles: 4420000000,
        deposits_and_other_assets: 620000000,
        total_asset: 11500000000,
      },
      {
        date: '2023-03-27',
        act_symbol: 'N',
        period: 'Year',
        cash_and_equivalents: 2900000000,
        receivables: 1160000000,
        notes_receivable: 0,
        inventories: 1130000000,
        other_current_assets: 460000000,
        total_current_assets: 5740000000,
        net_property_and_equipment: 1270000000,
        investments_and_advances: 130000000,
        other_non_current_assets: 0,
        deferred_charges: 0,
        intangibles: 4450000000,
        deposits_and_other_assets: 630000000,
        total_asset: 11600000000,
      },      
  ];  

export type Data = Record<string, any>;

// Define the select column separately
const selectColumn: ColumnDef<Data> = {
  id: "select",
  header: ({ table }) => (
    <Checkbox
      checked={
        table.getIsAllPageRowsSelected() ||
        (table.getIsSomePageRowsSelected() && "indeterminate")
      }
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label="Select all"
    />
  ),
  cell: ({ row }) => (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Select row"
    />
  ),
  enableSorting: false,
  enableHiding: false,
};

// Define custom column definitions for specific keys
const customColumns: Record<string, Partial<ColumnDef<Data>>> = {
  status: {
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  email: {
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  amount: {
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
};

// Function to generate columns dynamically
function getColumns(data: Data[]): ColumnDef<Data>[] {
    const columns: ColumnDef<Data>[] = [];
  
    // Add the select column
    columns.push(selectColumn);
  
    if (data.length > 0) {
      const keys = Object.keys(data[0]);
  
      keys.forEach((key) => {
        // Skip the 'id' column if you don't want to display it
        if (key === 'id') return;
  
        const customColumn = customColumns[key];
        if (customColumn) {
          columns.push({
            accessorKey: key,
            ...customColumn,
          });
        } else {
          // Default column definition for other keys
          columns.push({
            accessorKey: key,
            header: ({ column }) => (
              <Button
                variant="ghost"
                onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
                }
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
                <ArrowUpDown />
              </Button>
            ),
            // ... you can include other properties like 'cell' if needed
          });
        }
      });
    }
  
    return columns;
  }  

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnName, setColumnName] = React.useState('');

  // Generate columns dynamically
  const columns = React.useMemo(() => getColumns(data), [data]);

  React.useEffect(() => {
    if (columns.length > 0 && columns[0]?.id) {
      setColumnName(columns[0].id);
    }
  }, [columns]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input 
          placeholder="Filter"
          value={columnName ? (table.getColumn(columnName)?.getFilterValue() as string || "") : ""}
          onChange={(event) => {
            if (columnName) {
              const column = table.getColumn(columnName);
              if (column) {
                column.setFilterValue(event.target.value);
              }
            }
          }}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
        <div className="rounded-md border">
            <div className="w-full overflow-x-auto">      
            <Table className="w-full table-fixed">
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                    return (
                        <TableHead
                            key={header.id}
                            className="whitespace-nowrap overflow-hidden text-ellipsis"
                            style={{
                                minWidth: '150px', // Ensure minimum column width
                                maxWidth: '300px', // Optionally, cap column width
                              }}
                        >
                        {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                            )}
                        </TableHead>
                    )
                    })}
                </TableRow>
                ))}
            </TableHeader>
            <TableBody>
                {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                    <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    >
                    {row.getVisibleCells().map((cell) => (
                        <TableCell
                            key={cell.id}
                            className="whitespace-nowrap overflow-hidden text-ellipsis"
                            style={{ minWidth: '150px', maxWidth: '300px' }}
                        >
                        {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                        )}
                        </TableCell>
                    ))}
                    </TableRow>
                ))
                ) : (
                <TableRow>
                    <TableCell
                    colSpan={columns.length}
                    className="text-center text-muted-foreground"
                    >
                    No results.
                    </TableCell>
                </TableRow>
                )}
            </TableBody>
            </Table>
        </div>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
