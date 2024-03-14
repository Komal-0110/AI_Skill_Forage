import PropTypes from 'prop-types';

const Modal = ({ title, children, modalLoginOpen = false, setModalLoginOpen }) => {
  return (
    <div>
      <input
        value={modalLoginOpen}
        type='checkbox'
        checked={modalLoginOpen}
        onChange={() => setModalLoginOpen(!modalLoginOpen)}
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='relative modal-box'>
          <label
            onClick={() => setModalLoginOpen(!modalLoginOpen)}
            className='absolute btn btn-sm btn-circle right-2 top-2'>
            ✕
          </label>
          <h3 className='text-lg font-bold'>{title}</h3>
          <div className='py-4'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  modalLoginOpen: PropTypes.bool.isRequired,
  setModalLoginOpen: PropTypes.func.isRequired,
};
