import { View, Button } from 'react-native';
import Styles from 'utils/styles'
import Spacer from 'components/spacer'

export default function ({ navigation }) {
    const goTo = () => {
        navigation.navigate('Form')
    }

    return (
        <View style={[Styles.flex, Styles.paddingSm, Styles.centerVertical]}>
            <Button title="Contact Us" onPress={goTo} />
        </View>
    )
}
