import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'Components/Modal/Modal';
import { sizes } from 'Helpers/Props';
import { clearPendingChanges } from 'Store/Actions/baseActions';
import EditReleaseProfileModalContent from './EditReleaseProfileModalContent';

interface EditReleaseProfileModalProps {
  id?: number;
  isOpen: boolean;
  onModalClose: () => void;
  onDeleteReleaseProfilePress?: () => void;
}

function EditReleaseProfileModal({
  isOpen,
  onModalClose,
  ...otherProps
}: EditReleaseProfileModalProps) {
  const dispatch = useDispatch();

  const onModalClosePress = useCallback(() => {
    dispatch(
      clearPendingChanges({
        section: 'settings.releaseProfiles',
      })
    );
    onModalClose();
  }, [dispatch, onModalClose]);

  return (
    <Modal size={sizes.MEDIUM} isOpen={isOpen} onModalClose={onModalClosePress}>
      <EditReleaseProfileModalContent
        {...otherProps}
        onModalClose={onModalClosePress}
      />
    </Modal>
  );
}

export default EditReleaseProfileModal;