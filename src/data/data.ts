let invoices = [
  {
    name: 'santa Monica',
    number: 1995,
    amout: '$10800',
    due: '12/05/2012'
  },
  {
    name: 'meng gang',
    number: 1998,
    amout: '$20800',
    due: '12/06/2012'
  },
  {
    name: 'yu lanlan ',
    number: 1979,
    amout: '$1108001',
    due: '22/05/2012'
  },
  {
    name: 'meng zimo',
    number: 2007,
    amout: '$1110800',
    due: '12/05/2007'
  },
  {
    name: 'meng wei',
    number: 1988,
    amout: '$111108001',
    due: '12/05/1975'
  },

]
export const getInvoices = () => invoices;

//处理数据的方法，根据传入的url参数来过滤数据
export function getInvoice(number: number) {
  return invoices.find(
    (invoice) => invoice.number === number
  );
}
//删除delete
export function deleteInvoice(number: number) {

  invoices = invoices.filter(invoice => invoice.number !== number)
}