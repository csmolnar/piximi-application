import React from 'react';
import styles from './PrimaryAppBar.css';
import { AppBar, Grid, IconButton, Toolbar } from '@material-ui/core';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import ConnectedSearch from '../../../containers/ConnectedSearch';
import Logo from '../Logo/Logo';
import ImportImagesButton from '../ImportImagesButton/ImportImagesButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(styles);

function PrimaryAppBar(props) {
  const classes = useStyles();

  const { toggle, toggled, selectedImages, setSelectedImages } = props;

  return (
    <AppBar
      className={classNames(classes.appBar, {
        [classes.appBarShift]: toggled,
        [classes.appBarShiftLeft]: toggled
      })}
      color="default"
    >
      <Toolbar disableGutters={!toggled}>
        <IconButton
          aria-label="open sidebar"
          className={classNames(classes.menuButton, toggled && classes.hide)}
          color="inherit"
          onClick={toggle}
        >
          <MenuIcon />
        </IconButton>

        <Logo />

        <Grid container className={classes.root} spacing={16}>
          <Grid item xl={1} lg={2} md={3} sm={4} />

          <Grid item xl={2} lg={3} md={3} sm={3}>
            <ConnectedSearch />
          </Grid>

          <Grid item style={{ flexGrow: 1 }}>
            <ImportImagesButton />
          </Grid>

          <Grid item>
            <DeleteButton
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default React.memo(PrimaryAppBar);
