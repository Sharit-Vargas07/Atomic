import React from 'react';
import { FaTimes } from 'react-icons/fa';

function Modal({ open, onClose, children }) {
  return (
    <>
      {open && (
        <div className='modal fade show d-block' tabIndex='-1' role='dialog' style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className='modal-dialog modal-dialog-centered' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button type='button' className='close' onClick={onClose} aria-label='Close'>
                  <span aria-hidden='true'><FaTimes /></span>
                </button>
              </div>
              <div className='modal-body'>
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
