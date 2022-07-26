import { useState } from 'react'
import { Text, View, TextInput, Button, Alert } from 'react-native';
import Styles from 'utils/styles'
import Spacer from 'components/spacer'

export default function () {
    const [state, setState] = useState({})
    const [error, setError] = useState(null)

    const handleInputChanged = (name, val) => {
        setState(prevState => ({ ...prevState, [name]: val }))
    }

    const handleSubmit = () => {
        if (error || Object.keys(state).length == 0) {
            Alert.alert("Error", "Please key in all mandatory field!")
        } else {
            Alert.alert("User's Info", state && JSON.stringify(state))
        }
    }

    return (
        <View style={[Styles.flex, Styles.paddingSm]}>
            <Spacer size="sm" />
            <TextInput placeholder='Name' onChangeText={(val) => handleInputChanged('name', val)} style={Styles.textinput} />
            <Spacer size="sm" />
            <View>
                <TextInput placeholder='Email' onChangeText={(val) => {
                    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/

                    if (reg.test(val)) {
                        handleInputChanged('email', val)
                        setError(null)
                    } else {
                        setError('* Email Invalid')
                    }
                }} style={Styles.textinput} />
                <Spacer />
                {error && <Text style={Styles.textWarning}>{error}</Text>}
            </View>
            <Spacer size="sm" />
            <Button title='Submit' onPress={handleSubmit} />

        </View>
    )
}
