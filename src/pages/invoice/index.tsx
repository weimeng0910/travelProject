import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '@/data/data';
interface Invoice {
  name: string;
  number: number;
  amout: string;
  due: string;
}
export default function Invoice() {
  const params = useParams() as { invoiceId: string };

  let invoice = getInvoice(parseInt(params.invoiceId, 10)) as Invoice;
  let navigate = useNavigate();
  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {invoice.amout}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <button
        onClick={() => {
          deleteInvoice(invoice.number);
          navigate('/invoices');
        }}
      >
        delete
      </button>
    </main>
  );
}
