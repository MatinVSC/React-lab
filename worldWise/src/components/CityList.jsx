import Cityitem from './Cityitem';
import styles from './CityList.module.css';
import Spinner from './Spinner'
import Message from './Message'
import { useCities } from '../contexts/citiesContexts';

export default function CityList () {
    const {cities, isLoading} = useCities();

    isLoading && <Spinner />;
    if (!cities.length) return <Message message='add your first city'/>

    return (
        <div >
            <ul className={styles.cityList}>
                {cities.map(city => (
                    <Cityitem key={city.id} 
                    city={city} />
                ))}
            </ul>
        </div>
    )
};

