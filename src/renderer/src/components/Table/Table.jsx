import { useState } from 'react'
import AddUserForm from '../AddUserForm/AddUserForm.jsx'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

const MyTable = ({ initUsers = [] }) => {
  const [data, setData] = useState(initUsers)
  const [openForm, setOpenForm] = useState(false);

  const removeUser = (idx) => {
    setData(data.filter(el => el.id !== idx));
  };

  const displayModal = () => {
    setOpenForm(true);
  };

  const addUserModal = (formData) => {
    setData([...data, { ...formData, id: data.length }])
  };

  const closeModal = () => {
    setOpenForm(false);
  };

  return (
    <>
        <AddUserForm callback={addUserModal} open={openForm} closeCallback={closeModal} />
        <p>Table</p>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>First name</TableCell>
                  <TableCell>Last name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => 
                  <TableRow key={row.id}>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                    <TableCell><Button onClick={() => removeUser(row.id)}>Remove user</Button></TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <Button onClick={displayModal}>Add user</Button>
    </>
  )
};

export default MyTable
