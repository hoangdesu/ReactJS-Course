import React from 'react';

import './Footer.css';

// const Footer = () => {
//     const d = new Date();
//     const year = d.getFullYear();

//     return (
//         <p>
//             <a href='https://github.com/hoangdesu/' target='_blank' rel='noreferrer'>Hoang Nguyen&#169;{year}</a>
//         </p>
//     );
// };

// class component
class Footer extends React.Component {
    d = new Date();
    year = this.d.getFullYear();
    render() {
        return (
            <div className="footer">
                <a
                    href="https://github.com/hoangdesu/ReactJS-Course"
                    target="_blank"
                    rel="noreferrer"
                >
                    First React project by Hoang Nguyen&#169;{this.year}
                </a>
            </div>
        );
    }
}

export default Footer;
