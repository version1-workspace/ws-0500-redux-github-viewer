import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

const ModalContainer = ({ isOpen, renderContent }) => {
  return (
    <Modal isOpen={isOpen} contentLabel="Example Modal">
      {renderContent()}
    </Modal>
  )
}

ModalContainer.propTypes = {
  isOpen: PropTypes.bool,
  renderContent: PropTypes.func
}

export default ModalContainer
