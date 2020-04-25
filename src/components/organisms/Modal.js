import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

const customStyles = {
  content: {
    width: '60%',
    margin: 'auto'
  }
}

Modal.setAppElement('#root')

const ModalContainer = ({ show, component }) => {
  if (!show) {
    return <></>
  }
  return (
    <Modal style={customStyles} isOpen={show}>
      {component}
    </Modal>
  )
}

ModalContainer.propTypes = {
  show: PropTypes.bool,
  component: PropTypes.object
}

export default ModalContainer
