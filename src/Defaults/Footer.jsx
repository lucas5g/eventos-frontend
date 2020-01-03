import React from 'react'

const Footer = () => {
    const getYear = () => {
        var d = new Date();
        var n = d.getFullYear();    
        return n
    }
    return(
        <footer className="page-footer font-small purple-gradient fixed-bottom">
            <div className="footer-copyright text-center py-3">
                © {getYear()} Copyright: <strong>Detec</strong> 
            </div>
        </footer>
    )
}

export default Footer