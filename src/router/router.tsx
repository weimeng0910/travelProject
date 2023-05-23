import { Link, Outlet } from 'react-router-dom';
export default function Rooter() {
  return (
    <div>
      <h1>React Router v6.5 新特性</h1>
      <nav style={{ display: 'flex', borderBottom: 'solid #000', paddingBottom: '1rem' }}>
        <Link to="invoices">Invoices</Link> | {''}
        <Link to="expenses">Expenses</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
