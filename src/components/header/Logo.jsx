import React,{memo} from 'react';
import LogoImg from "../../components/assests/Qtify.png";
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <>
            <Link to='/'><img src={LogoImg} alt='...'/></Link>
        </>
    )
}

export default memo(Logo)