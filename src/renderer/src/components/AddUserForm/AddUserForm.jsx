import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const AppUserForm = ({ callback, closeCallback, open }) => {
  const addUser = ({ fname, lname }) => {
    callback({ first_name: fname, last_name: lname });
  };
  const closeForm = () => {
    closeCallback();
  };

  return (
      <Dialog 
        onClose={callback} 
        open={open}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            console.log(formData);
            addUser(formJson);
            closeForm();
          }
        }}
      >
        <DialogTitle>Add user</DialogTitle>
        <DialogContent>
          <DialogContentText>Add user</DialogContentText>
          <TextField
          autofocus
          required
          id='fname'
          name='fname'
          label='First name'
          type='text'
          fullwidth
          />
          <br/>
          <TextField
          autofocus
          required
          id='lname'
          name='lname'
          label='Last name'
          type='text'
          fullwidth
          />
        </DialogContent>
      <DialogActions>
        <Button type='submit'>Add</Button>
        <Button onClick={closeForm}>Close</Button>
      </DialogActions>
      </Dialog>
  )
};

export default AppUserForm
