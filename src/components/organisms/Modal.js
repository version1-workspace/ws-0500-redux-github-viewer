import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

const customStyles = {
  content: {
    width: '60%',
    margin: 'auto'
  }
}

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
  component: PropTypes.func
}

export default ModalContainer
