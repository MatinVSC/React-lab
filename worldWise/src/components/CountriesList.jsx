import CountryItem from './CountryItem';
import styles from './CountryList.module.css';
import Spinner from './Spinner'
import Message from './Message'
import { useCities } from '../contexts/citiesContexts';

export default function CountriesList () {
    const {cities, isLoading} = useCities();

    const countries = cities.reduce((arr, city) => {
        if (!arr.map(el => el.country).includes(city.country)) return [...arr, {country: city.country, emoji: city.emoji}] 
        else return arr
    }, [])

    isLoading && <Spinner />;
    if (!cities.length) return <Message message='add your first city'/>

    return (
        <div >
            <ul className={styles.countryList}>
                {countries.map(country => (
                    <CountryItem 
                    key={country.country} 
                    country={country} />
                ))}
            </ul>
        </div>
    )
};

