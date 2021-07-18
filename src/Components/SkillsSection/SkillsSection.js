import React from 'react'

import { makeStyles, withStyles } from "@material-ui/core/styles";

import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import "../../Styles/Main.css"
import './SkillsSection.css'

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%"
    },
    heading: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    },
    details: {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        textAlign: 'left',
        maxWidth: '24rem',
        marginLeft: '3rem'
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
        <section className='skillsSection'>
            <div className='sectionTitle'>
                <h1 className='skillsTitle'>
                    My Skills
                </h1>
                <h3 className='skillsSubtitle'>
                    My technical level
                </h3>
            </div>
            <div className='Dropdowns'>
                <div className={classes.root + ' dropdown'}>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                            
                            <Typography className={classes.heading}> 
                                <i className="fas fa-file-code"></i>
                                <div className='sectionTitle'>
                                    <h1 className='skillTitle'>
                                        Front-End Development
                                    </h1>
                                    <h3 className='skillSubtitle'>
                                        Less than 1 year
                                    </h3>
                                </div>
                            </Typography>

                        </AccordionSummary>

                        <AccordionDetails className={classes.details}>
                            <Typography>
                                <ul>
                                    <li>
                                        <span>HTML</span> <span>Intermediate</span>
                                    </li>
                                    <progress id="HTML" value="85" max="100" className=".progressBar"></progress>

                                    <li>
                                        <span>CSS</span> <span>Intermediate</span>
                                    </li>
                                    <progress id="CSS" value="75" max="100" className=".progressBar"></progress>
                                    
                                    <li>
                                        <span>JavaScript</span> <span>Intermediate</span>
                                    </li>
                                    <progress id="JavaScript" value="55" max="100" className=".progressBar"></progress>

                                    <li>
                                        <span>ReactJS</span> <span>Beginner</span>
                                    </li>
                                    <progress id="ReactJS" value="35" max="100" className=".progressBar"></progress>

                                    <li>
                                        <span>Sass</span> <span>Intermediate</span>
                                    </li>
                                    <progress id="Sass" value="45" max="100" className=".progressBar"></progress>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>

                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            
                        <Typography className={classes.heading}>
                            <i className="fas fa-code"></i> 
                            <div className='sectionTitle'>
                                <h1 className='skillTitle'>
                                    Back-End Development
                                </h1>
                                <h3 className='skillSubtitle'>
                                    Less than 6 Months
                                </h3>
                            </div>
                        </Typography>
                        </AccordionSummary>

                        <AccordionDetails className={classes.details}>
                            <Typography>
                                <ul>
                                    <li>
                                        <span>JavaScript</span> <span>Beginner</span>
                                    </li>
                                    <progress id="JavaScript" value="45" max="100" className=".progressBar"></progress>

                                    <li>
                                        <span>Express</span> <span>Beginner</span>
                                    </li>
                                    <progress id="Express" value="35" max="100" className=".progressBar"></progress>

                                    <li>
                                        <span>NodeJS</span> <span>Beginner</span>
                                    </li>
                                    <progress id="NodeJS" value="45" max="100" className=".progressBar"></progress>
                                    <li>
                                        <span>Sequelize</span> <span>Beginner</span>
                                    </li>
                                    <progress id="Sequelize" value="45" max="100" className=".progressBar"></progress>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div className={classes.root + ' dropdown'}>
                    <Accordion>

                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            
                        <Typography className={classes.heading}>
                            <i className="fas fa-database"></i>
                            <div className='sectionTitle'>
                                <h1 className='skillTitle'>
                                    Database
                                </h1>
                                <h3 className='skillSubtitle'>
                                    Less than 6 Months
                                </h3>
                            </div>
                        </Typography>
                    </AccordionSummary>

                        <AccordionDetails className={classes.details}>
                            <Typography>
                                <ul>
                                    <li>
                                        <span>PostgreSQL (SQL)</span> <span>Intermediate</span>
                                    </li>
                                    <progress id="PostgreSQL" value="50" max="100" className=".progressBar"></progress>
                                    
                                    <li>
                                        <span>MySql (SQL)</span> <span>Intermediate</span>
                                    </li>
                                    <progress id="MySql" value="60" max="100" className=".progressBar"></progress>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>

                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                            <i className="fas fa-pen-fancy"></i>
                            <div className='sectionTitle'>
                                <h1 className='skillTitle'>
                                    Design
                                </h1>
                                <h3 className='skillSubtitle'>
                                    More than 2 years
                                </h3>
                            </div>
                            </Typography>

                        </AccordionSummary>

                        <AccordionDetails className={classes.details}>
                            <Typography>
                                <ul>
                                    <li>
                                        <span>Photoshop</span> <span>Intermediate</span>
                                    </li>
                                    <progress id="PostgreSQL" value="90" max="100" className=".progressBar"></progress>
                                    
                                    <li>
                                        <span>Figma</span> <span>Intermediate</span>
                                    </li>
                                    <progress id="MySql" value="75" max="100" className=".progressBar"></progress>

                                    <li>
                                        <span>Adobe XD</span> <span>Intermediate</span>
                                    </li>
                                    <progress id="MySql" value="65" max="100" className=".progressBar"></progress>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>

            </div>
        </section>
    )
}

export default SkillsSection
