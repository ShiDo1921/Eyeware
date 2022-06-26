import IconButton from '@mui/material/IconButton';
import Icon from '@mui/icons-material/Search';

const SearchButton = ({title,color="white", onClick}) => {
  return (
    <IconButton 
      aria-label="delete"
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

export default SearchButton