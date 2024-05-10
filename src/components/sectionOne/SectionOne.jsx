import React from 'react';
import './sectionOne.css';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import RefreshIcon from '@mui/icons-material/Refresh';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SectionOne = () => {
  return (
    <div className='sectionOneContainer'>
        <div className="one">
            <h3>Relations and Functions (Mathematics)</h3>
        </div>
        <div className="two">
            <div className="first">
                <ul>
                    <li>Study</li>
                    <li>Quiz</li>
                    <li>Test</li>
                    <li>Game</li>
                    <li>Others</li>
                </ul>
            </div>
            <div className="second">
                <div className="screen">
                    <h3>9 + 6 + 7x - 2x - 3</h3>
                    <LightbulbIcon className='light'/>
                    <VolumeUpIcon className='volume'/>
                </div>
            </div>
            <div className="third">
                <div className="secOne">
                    <RefreshIcon/>
                </div>
                <div className="secTwo">
                    <span className='left'><ChevronLeftIcon className='leftIcon'/></span>
                    <span className='text'>01/10</span>
                    <span className='right'><ChevronRightIcon className='rightIcon'/></span>
                </div>
                <div className="secThree">
                    <FullscreenIcon/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionOne;