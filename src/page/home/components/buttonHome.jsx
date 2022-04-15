import Button from '@mui/material/Button';

export const ButtonHome = ({names}) => {
  return (
    <>
      <Button size= 'small' variant="contained"
      sx={{
        border: 1,
        bgcolor: 'red',
        color: 'white',
      }}> {names}</Button>
    </>
  )
}