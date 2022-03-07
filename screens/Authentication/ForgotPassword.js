import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import {AuthLayout} from '../';
import { FONTS, SIZES, COLORS, icons } from '../../constants';
import { FormInput, TextButton, TextIconButton } from '../../components';
import { utils } from '../../utils';


const ForgotPassword = () => {

    const [email, setEmail] = React.useState("")
    const [emailError, setEmailError] = React.useState("")


    return (
        <AuthLayout
            title="Password Recovery"
            subtitle="Please enter your email address to recover your password"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >
            {/* Form Input */}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2 
                }}
            >

            </View>
            {/* Button */}
        </AuthLayout>
    )
}

export default ForgotPassword;