import React from 'react'
import Title from '../Title/Title'

import { makeStyles, withStyles } from "@material-ui/core/styles";

import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "../../Styles/Main.css"
import './SkillsSection.css'

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  }));

const Accordion = withStyles({
    root: {
        background: 'none',
        border: 'none',
        boxShadow: 'none',
    },
    content: {
        flexGrow: 0
    }
})(MuiAccordion);
    

const AccordionSummary = withStyles({
content: {
    flexGrow: 0
}
})(MuiAccordionSummary);

const SkillsSection = () => {
    const classes = useStyles();
    return (
        <section className='container skillsSection'>
            <Title titulo='Skills' subtitulo='My technical level'/>
            <div className='Grid-Dropdowns'>

                <div className={classes.root}>
                    <Accordion>

                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>Accordion 1</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className={classes.root}>
                    <Accordion>

                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>Accordion 1</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className={classes.root}>
                    <Accordion>

                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>Accordion 1</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className={classes.root}>
                    <Accordion>

                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>Accordion 1</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

            </div>
        </section>
    )
}

export default SkillsSection
