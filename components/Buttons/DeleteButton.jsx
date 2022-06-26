import IconButton from '@mui/material/IconButton';
import Icon from '@mui/icons-material/Delete';

const DeleteButton = ({title, }) => {
  return (
    <IconButton 
      aria-label="delete"
      color='error'
      title={title}
    >
      <Icon />
    </IconButton>
  )
}

export default DeleteButton