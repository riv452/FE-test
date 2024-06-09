import React from 'react';
import CustomRow from '../../common/CustomRow';
import CustomCol from '../../common/CustomCol';
import styles from './MenuBar.module.css';
import UserItem from '../menuItems/UserItem';
import ProfileItem from '../menuItems/ProfileItem';
import ManagerItem from '../menuItems/ManagerItem';
import SettingItem from '../menuItems/SettingItem';
import israelLogo from '../../../images/logo.png';
import ExitButton from '../../buttons/ExitButton';

const MenuBarComponent = (props) => {

    return (
        <div className={styles.rightMenuContainer}>
            <CustomRow className="justify-content-center">
                <CustomCol xs="auto">
                    <img src={israelLogo} alt="סמל מדינת ישראל" className={styles.israelLogo} />
                </CustomCol>
            </CustomRow >
            <div className={styles.rightMenuInner}>
                <CustomRow className="justify-content-center flex-grow-1">
                    <CustomCol xs="auto">
                        <UserItem props={props} />
                        <ProfileItem />
                        <ManagerItem />
                        <SettingItem />
                    </CustomCol>
                </CustomRow>
            </div>
            <ExitButton />
        </div>
    );
};

export default MenuBarComponent;
