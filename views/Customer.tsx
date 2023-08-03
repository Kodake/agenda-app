import { Headline } from 'react-native-paper';
import { Props } from '../interfaces/appInterfaces';

const Customer: React.FC<Props> = ({ navigation }) => {
    return (
        <>
            <Headline style={{
                textAlign: 'center',
                marginTop: 20,
                marginBottom: 10,
                fontSize: 30
            }}>{'Datos del Paciente'}</Headline>
        </>
    );
}

export default Customer;