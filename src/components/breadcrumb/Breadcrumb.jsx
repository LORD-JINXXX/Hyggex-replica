import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import './breadcrumb.css';

const Breadcrumb = () => {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    return (
        <div className='breadcrumb'>
            <Stack spacing={2}>
                <Breadcrumbs separator="›" aria-label="breadcrumb" className='breadContainer'>
                    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick} className='breadLink'>
                        <HomeIcon className='breadIcon' />
                    </Link>
                    <Link
                        underline="hover"
                        key="2"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                        onClick={handleClick}
                        className='breadLink'
                    >
                        Flashcard
                    </Link>
                    <Link
                        underline="hover"
                        key="2"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                        onClick={handleClick}
                        className='breadLink'
                    >
                        Mathematics
                    </Link>
                    <Typography key="3" color="text.primary" className='breadTypo'>
                        Relation and Function
                    </Typography>
                </Breadcrumbs>
            </Stack>
        </div>
    )
}

export default Breadcrumb;