import IconButton from '@mui/material/IconButton';
import Icon from '@mui/icons-material/Favorite';

const FavoriteButton = ({title, color="white"}) => {
  return (
    <IconButton 
      aria-label="favorite"
      title={title}
      style={{
        color: color
      }}
    >
      <Icon />
    </IconButton>
  )
}

export default FavoriteButton