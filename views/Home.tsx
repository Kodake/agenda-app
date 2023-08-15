import { Headline } from 'react-native-paper';
import AgendaList from '../components/AgendaList';

const Home = () => {
    return (
        <>
            <Headline style={{
                textAlign: 'center',
                marginTop: 20,
                marginBottom: 10,
                fontSize: 30
            }}>{'Citas Agendadas'}</Headline>

            <AgendaList />
        </>
    );
}

export default Home;