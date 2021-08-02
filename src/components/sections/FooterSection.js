import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export const FooterSection = () => {
    return (
        <div className="footer">
            <div className="footer_icons">
                <div className="footer_icons-item">
                    <a href="https://twitter.com/rcuencam" target="_blank"><TwitterIcon style={{color:"white"}}/></a>
                </div>
                <div className="footer_icons-item">
                    <a href="https://www.instagram.com/rcuencam/" target="_blank"><InstagramIcon style={{color:"white"}}/></a>
                </div>
                <div className="footer_icons-item">
                    <a href="https://github.com/RCuencam" target="_blank"><GitHubIcon style={{color:"white"}}/></a>
                </div>
                <div className="footer_icons-item">
                    <a href="https://www.linkedin.com/in/rcuencam/" target="_blank"><LinkedInIcon style={{color:"white"}}/></a>
                </div>
            </div>
        </div>
    )
}
