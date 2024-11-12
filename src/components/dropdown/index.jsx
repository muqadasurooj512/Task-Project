import React from 'react';
import { StyleSheet } from 'react-native';
import { Menu, Provider } from 'react-native-paper';
import { getAuth } from '@react-native-firebase/auth';

const AvatarDropdown = ({ visible, closeMenu }) => {
  const auth = getAuth();

  const handleLogout = async () => {
    await auth.signOut();
    console.log('Logged out');
    closeMenu();
  };

  return (
    <Provider>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<></>} // The anchor will be controlled by the avatar press
      >
        <Menu.Item onPress={handleLogout} title="Logout" />
      </Menu>
    </Provider>
  );
};

const styles = StyleSheet.create({
  anchorText: {
    padding: 10,
  },
});

export default AvatarDropdown;
