import React, { useContext } from 'react'
import GameListContext from '../../context/GameListContext'
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@mui/styles';
const PaginationUI = () => {

  const {page,setPage} = useContext(GameListContext)

  const handleChange = (event, value) => {
    setPage(value);
  };

  const useStyles = makeStyles(() => ({
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#fff"
      }
    }
  }));
  const classes = useStyles();
  
  return <Pagination classes={{ ul: classes.ul }} count={10} />;
}

export default PaginationUI
