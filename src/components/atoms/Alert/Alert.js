import { Alert } from 'react-native'

export default function (title, message, buttons, moreOptions) {
  Alert.alert(title, message, buttons, moreOptions)
}
