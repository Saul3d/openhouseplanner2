import {
  DataGrid,
  // GridRowsProp,
  GridColDef,
  // GridFilterItem,
} from '@mui/x-data-grid';
// import { isTemplateExpression } from 'typescript';
import { Expense } from '../components/expense.model';

interface IExpenseListValue {
  items: Expense[];
}
const ExpenseItem: React.FC<IExpenseListValue> = (props) => {
  const columns: GridColDef[] = [
    { field: 'actions', headerName: 'Actions', width: 150 },
    { field: 'title', headerName: 'Expense Title', width: 150 },
    { field: 'type', headerName: 'Expense Type', width: 150 },
    { field: 'address', headerName: 'Address', width: 350 },
    { field: 'amount', headerName: 'Amount', width: 150 },
    { field: 'date', headerName: 'Purchase Date', width: 150 },
  ];



  return (
    <>
      <div style={{ height: 600, width: '100%' }}>
        
        <DataGrid
          rows={props.items}
          columns={columns}
          // checkboxSelection
          hideFooterPagination
        />
      </div>
    </>
  );
};

export default ExpenseItem;
