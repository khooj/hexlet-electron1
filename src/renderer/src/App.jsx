import Table from './components/Table/Table.jsx'

const initUsers = [
  { id: 0, first_name: 'Test', last_name: 'Testov' },
  { id: 1, first_name: 'Test', last_name: 'Testov' },
  { id: 2, first_name: 'Test', last_name: 'Testov' },
  { id: 3, first_name: 'Test', last_name: 'Testov' },
];

function App() {

  return (
    <>
      <Table initUsers={initUsers} />
    </>
  )
}

export default App
