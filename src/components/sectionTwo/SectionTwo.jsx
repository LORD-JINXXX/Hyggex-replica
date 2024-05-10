import React from 'react';
import './sectionTwo.css';
import AddIcon from '@mui/icons-material/Add';



const SectionTwo = () => {
  return (
    <div className='sectionTwoContainer'>
        <div className="leftContainer">
            <div className="image">
                <img src="/images/logoHyggex.png" alt="" srcset="" />
            </div>
            <div className="content">
                <span className='spanOne'>powered by</span>
                <span className='spanTwo'>
                    <h6>Hygge</h6>
                    <h6>X</h6>
                </span>
            </div>

        </div>
        <div className="rightContainer">
            <span><AddIcon className='addIcon'/></span>
            <span>Create Flashcard</span>
        </div>
    </div>
  )
}

export default SectionTwo;