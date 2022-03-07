import React from "react";
import { 
    TouchableOpacity,
    Text,
    Image,
    StyleSheet

} from 'react-native';

<<<<<<< HEAD
import { FONTS, COLORS, SIZES, icons } from "../constants";
=======
import { FONTS, COLORS} from "../constants";
>>>>>>> 107fa3deae28fcc9add17a85ff047b8054504a6e

const TextIconButton = ({
    containerStyle,
    label,
    labelStyle,
    icon,
    iconPosition,
    iconStyle,
    onPress
}) => {
    return (
        <TouchableOpacity
         style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            ...containerStyle

         }}
         onPress={onPress}
        >
            {iconPosition == "LEFT" &&
                <Image
                    source={icon}
                    style={{
                        ...styles.image,
                        ...iconStyle
                    
                    }}
                />
            }
            <Text 
            style={{
                    ...FONTS.body3,
                    ...labelStyle
                }}
            >
             {label}   
            </Text>

            {iconPosition == "RIGHT" &&
                <Image
                    source={icon}
                    style={{
                        ...styles.image,
                        ...iconStyle
                    
                    }}
                />
            }

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    image: {
        marginLeft: 5,
        width: 20,
        height: 20,
        tintColor: COLORS.black
    }
})
export default TextIconButton;