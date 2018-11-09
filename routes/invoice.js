const invoices = [
  {
    date: '2017-10-31',
    items: [
      { id: '2143', value: 200 },
      { id: '2111', value: 500 }
    ]
  },
  {
    date: '2017-07-12',
    items: [
      { id: '2222', value: 120 },
      { id: '2143', value: 280 }
    ]
  },
  {
    date: '2017-02-02',
    items: [
      { id: '2143', value: 110 },
      { id: '7777', value: 390 }
    ]
  },
];

module.exports = app => {
  app.get('/invoices', (req, res) => res.json(invoices));
  app.get('/invoices/:id', (req, res) => res.json(invoices[0]));
}
