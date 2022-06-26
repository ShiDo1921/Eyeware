import IconButton from '@mui/material/IconButton';
import Icon from '@mui/icons-material/ShoppingCart';

const CartButton = ({title, color="white", itemCount}) => {
  return (
    <div style={{position: 'relative'}}>
      <div style={{
        position: 'absolute', 
        color: 'var(--fontDarkColor)', 
        backgroundColor: 'var(--fontColor)',
        fontSize: '.8rem',
        padding: '.1rem .4rem',
        borderRadius: '50%',
        zIndex: 10,
        top: 0,
        right: 0
      }}>
        {itemCount}
      </div>
      <IconButton 
        aria-label="cart"
        title={title}
        style={{
          color: color
        }}
      >
        <Icon />
      </IconButton>
    </div>
  )
}

export default CartButton