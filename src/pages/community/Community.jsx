import React from 'react'
import Banner2 from '../../component/banner2/Banner2';
import Footer from '../../component/Footer/Footer';
import Header from '../../component/header/Header';
import { icons } from '../../utils/constants';
import './style.css';
const Community = () => {
  return (
    <>
        <Header />
        <Banner2 icon={icons.communityIcon}  bgImg={"community-bg"}/>
        <Footer />
    </>
  )
}

export default Community