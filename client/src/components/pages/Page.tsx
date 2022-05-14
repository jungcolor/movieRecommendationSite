import { CssBaseline } from '@mui/material';
import React from 'react';
import ContentsContainer from '../layouts/contents/ContentsContainer';
import FooterContainer from '../layouts/footer/FooterContainer';
import HeaderContainer from '../layouts/header/HeaderContainer';

function Page() {
    return (
        <>
            <CssBaseline />
            <HeaderContainer />
            <ContentsContainer />
            <FooterContainer />
        </>
    );
}

export default Page;