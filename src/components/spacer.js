import { View } from 'react-native';

export default function ({ size }) {
    let paddingVal = 5

    if (size == 'sm') {
        paddingVal = 10
    } else if (size == 'md') {
        paddingVal = 20
    } else if (size == 'lg') {
        paddingVal = 30
    }

    return (
        <View style={{ padding: paddingVal }} />
    )
}