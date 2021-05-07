import Home from '../assets/home.png';

import { makeStyles } from '@material-ui/core/styles';

import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        
        width:"100%"
    },
  }));

function IntroIllustration() {
    const classes = useStyles();
    return (
      <Container>  
            <img src={Home} className={classes.root} /> 
      </Container> 
    )
}

export default IntroIllustration
