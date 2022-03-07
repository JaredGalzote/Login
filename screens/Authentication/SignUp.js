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

const SignUp = ({ navigation }) => {

    const [email, setEmail]= React.useState("")
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [showPass, setShowPass] = React.useState(false)
    
    const [emailError, setEmailError] = React.useState("")
    const [usernameError, setUsernameError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")

    return (
        <View>
            <AuthLayout
                title="Getting Started"
                subtitle="Create an account to continue!"
                titleContainerStyle={{
                    marginTop: SIZES.radius
                }}
            >
                {/* Forn Input And Sign Up*/}
                <View
                    style={{
                        flex: 1,
                        marginTop: SIZES.padding
                    }}
                
                ></View>

            </AuthLayout>
        </View>
    )
}

export default SignUp;