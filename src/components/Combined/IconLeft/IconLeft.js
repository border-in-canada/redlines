import React, { Component } from 'react';
import styles from './IconLeft.module.css';
import StatusText from '../../StatusText/StatusText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

class IconLeft extends Component {

    state = {
        focused: false
    }

    focusHandler = () => {
        this.setState({focused: !this.state.focused});
    }

    render() {

        const {id, type, placeholder, label, disabled, value, msgValue, msgType, changed} = {...this.props.config};

        const ContainerClassName = [
            styles.Container, 
            `${(disabled ? this.state.focused : this.state.focused || value) && `${styles.Focus}`}`, 
            `${(msgType === 'Error' ? `${styles.Error}` : '')}`,
            `${(value && !this.state.focused  ? `${styles.Filled}` : '')}`,
            `${(disabled ? `${styles.Disabled}` : '')}`];

        return (
            <div className={styles.Wrapper}>
                <div className={ContainerClassName.join(' ')}>
                    <i><FontAwesomeIcon icon={faCalendarAlt} /></i>
                    <input  
                        type={type}
                        id={id}
                        value={value}
                        placeholder={placeholder}
                        disabled={disabled}
                        onChange={changed}
                        onFocus={this.focusHandler}
                        onBlur={this.focusHandler}
                    />
                    <label htmlFor={id}>{label}</label>
                </div>
                <StatusText msgValue={msgValue} msgType={msgType} />
            </div>
        );
    }
}

export default IconLeft;