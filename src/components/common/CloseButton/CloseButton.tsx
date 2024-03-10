import React, { FC } from 'react';

import { closeIcon } from '../../../assets/icons';
import './styles.css';

type CloseButtonProps = {
  onClose?: () => void
};
const CloseButton: FC<CloseButtonProps> = ({ onClose }) => (
  <button className="close-btn" onClick={onClose}>
    {closeIcon}
  </button>
);

CloseButton.defaultProps = {
  onClose: () => {},
};

export default CloseButton;
