import React from 'react';

function Map() {
    return (
      <>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/d/u/0/embed?mid=1m0KsJOdBE59PX0P-XxiJL8129jo1yhU&z=11&ehbc=2E312F&noprof=1"
          width="100%"
          style={{ border: 0, height: '70vh', margin: 0, padding: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
        <p style={{ textAlign: 'right', fontSize: '0.8em', margin: 0, padding: 0 }}>(press full screen on the top right to view the whole map)</p>
      </>
    );
  }

export default Map;