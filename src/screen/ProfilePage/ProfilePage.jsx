import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import './profilepage.scss'

const ProfilePage = () => {
  return  (
        <div className="profile">
            <CloseIcon style={{ color: 'white', margin: '0 0 60px 418px' }} />
            <AccountCircleIcon color="action" style={{ width: 70, height: 70, color: 'white' }} />
            <p className='proflie__text'>Ортонку группа</p>
            <h3>Алимова Наиля</h3>
            <div className='profile__acccordion'> 
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>Колдонуучулар</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Атасы: <p>name</p>
                    <hr />
                    Апасы: <p>name</p>
                    <hr />
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
        <button className='profile__btn'>Өнүгүү күндөлүгү</button>
        <button className='profile__btn_exit'><LoginIcon style={{ color: "#0634DE", marginRight: -20, fontSize: 27 }} /> Чыгуу</button>
    </div>
  )
};

export default ProfilePage;
