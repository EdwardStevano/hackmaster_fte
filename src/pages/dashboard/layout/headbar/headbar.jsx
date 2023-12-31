import React, { useState, useRef, useEffect } from 'react'

// Importation de ressource
import './_headbar.scss'

// import TokenDecoder from '@utils/helpers/TokenDecoder'
import avatar from '../../../../assets/branding/img/400x500/img27.jpg'
import qr from '../../../../assets/branding/387524050_886379549457712_7481651391537882631_n.jpg'

function Headbar() {
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [Themeicon, setThemeicon] = useState();
  const [modalaiOpen, setModalaiOpen] = useState(false);
  const [qrModal, setqrModal] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };


  return (
    <div>
      <div className={"headbar-content"}>
        <div className="searchBar">
          <div className="search-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
            </svg>
            <input type="text" placeholder='Recherche...' />
            <div className="separator"></div>

            <div className="searchImage">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
              </svg>
              <span>Recherche par image</span>
            </div>

          </div>
        </div>

        <div className="headIcon" onClick={handleModalOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 right-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
        </svg>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={handleModalClose}>
            <div className="modal">
              <div className="modal-content">
                <p>Scannez le code QR avec l'application mobile</p>
                <button className="modal-close" onClick={handleModalClose}>
                  &#10005;
                </button>
                <img src={qr} alt="Avatar" className="modal-image" />
              </div>
            </div>
          </div>
        )}


          <div className="separator2"></div>
          <div className="mode-btn">
            {/* <img src={localStorage.getItem('SuperMode') === "true" ? sun_icon : moon_icon} alt='EMIT logo' className='switchmode_icon svgicon' width='35px' onClick={() => switch_mode()} /> */}
            
          </div>

          <div className="usercard">
            {/* <div className="userAvatar"></div> */}
            <img src={avatar} alt="" className="avatar" />
            <div className="userInfo">
              <h4>Edouardo Stevano</h4>
              <span className='role'>Citoyen</span>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Headbar