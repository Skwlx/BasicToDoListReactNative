import { Alert } from 'react-native';

const AlertMsg = (title: string, msg: string) => Alert.alert(title, msg, [{ text: 'OK' }]);

export default AlertMsg;
