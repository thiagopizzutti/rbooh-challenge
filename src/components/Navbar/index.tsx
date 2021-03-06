import React, { useContext } from 'react';
import { DataContext } from '../../hooks/useContext'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Button from '../Button';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize: 18
    },
    margin: {
      marginLeft: theme.spacing(2)

    }
  }),
);


const ButtonAppBar = () => {
  const classes = useStyles();
  
  const { handleOpenAddModal } = useContext(DataContext)
  
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <FastfoodIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Meus Pratos
          </Typography>
          <Button
            onClick={handleOpenAddModal}
          />
                   
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar
