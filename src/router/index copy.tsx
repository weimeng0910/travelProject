import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rooter from '@/router/router';
import Invoices from '@/pages/invoices';
import Invoice from '@/pages/invoice';
import Expenses from '@/pages/expenses';
import ErrorPage from '@/router/Error';

function Root() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rooter />}>
            <Route path="invoices" element={<Invoices />}>
              <Route path=":invoiceId" element={<Invoice />} />
            </Route>

            <Route path="expenses" element={<Expenses />} />

            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Root;
