import React from 'react';

import { deleteIcon } from '../../../assets/icons';
import './styles.css';

const DeleteButton = () => (
  <button className="delete-btn">
    {deleteIcon}
  </button>
);

export default DeleteButton;
