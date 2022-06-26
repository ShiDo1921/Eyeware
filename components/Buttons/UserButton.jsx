import IconButton from '@mui/material/IconButton';
import Icon from '@mui/icons-material/Person';

const UserButton = ({title, color="white", onClick}) => {
  return (
    <IconButton 
    aria-label="user"
    onClick={onClick}
    title={title}
    style={{
        color: color
    }}
  >
    <Icon />
  </IconButton>
  )
}

export default UserButton