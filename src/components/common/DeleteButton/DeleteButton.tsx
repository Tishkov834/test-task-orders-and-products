import React, { FC, MouseEventHandler } from 'react';

import { deleteIcon } from '../../../assets/icons';
import './styles.css';

type DeleteButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>
};

const DeleteButton: FC<DeleteButtonProps> = ({ onClick }) => (
  <button className="delete-btn" onClick={onClick}>
    {deleteIcon}
  </button>
);

DeleteButton.defaultProps = {
  onClick: () => {},
};

export default DeleteButton;
