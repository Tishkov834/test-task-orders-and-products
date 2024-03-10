import React, { FC } from 'react';

import CloseButton from '../common/CloseButton';
import { deleteIcon } from '../../assets/icons';
import './styles.css';

type ConfirmationModalProps = {
  isOpen: boolean
  children: React.ReactNode
  title: string
  onClose: () => void
  onConfirm: () => void
};

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  isOpen, onClose, onConfirm, children, title,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="confirmation-modal">
      <div className="modal-content">
        <h1 className="modal-title">{title}</h1>
        {children}
        <div className="buttons">
          <button className="cancel-button" onClick={onClose}>Отменить</button>
          <button className="delete-button" onClick={onConfirm}>
            {deleteIcon}
            Удалить
          </button>
        </div>
        <CloseButton onClose={onClose} />
      </div>
    </div>
  );
};

export default ConfirmationModal;
