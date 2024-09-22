import CountryItem from './CountryItem';
import styles from './CountryList.module.css';
import Spinner from './Spinner'
import Message from './Message'

export default function CountriesList ({cities, isLoading}) {
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

