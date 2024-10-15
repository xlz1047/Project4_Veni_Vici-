import React, { useState, useEffect } from 'react';
import './app.css';

const App = () => {
    const [dogData, setDogData] = useState(null);
    const [banList, setBanList] = useState([]);

    const API_KEY = 'live_aZSkReO2dVijfSRYx5lseMQvXpbTSLkaNj1L5TevBVrxgzoowA317OkPTZn3rsBM'; 

    // Fetches random dog data from the Dog API
    const fetchDogData = async () => {
        try {
            const response = await fetch('https://api.thedogapi.com/v1/images/search?include_breeds=true', {
                headers: {
                    'x-api-key': API_KEY,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();

            // Check if the fetched dog has any banned attribute; if so, fetch another dog
            if (data.length > 0 && data[0].breeds.length > 0) {
                const breedName = data[0].breeds[0].name;
                const lifeSpan = data[0].breeds[0].life_span;
                const temperament = data[0].breeds[0].temperament;

                if (!banList.includes(breedName) && !banList.includes(lifeSpan) && !banList.includes(temperament)) {
                    setDogData(data[0]); // Display the fetched dog data if none of the attributes are banned
                } else {
                    fetchDogData(); // Re-fetch if any attribute is on the ban list
                }
            } else {
                fetchDogData(); // Re-fetch if the breed data is incomplete or unavailable
            }
        } catch (error) {
            console.error('Error fetching dog data:', error);
        }
    };

    // Adds an attribute to the ban list and immediately updates the display
    const addToBanList = (attribute) => {
        if (!banList.includes(attribute)) {
            setBanList((prevBanList) => [...prevBanList, attribute]);
            fetchDogData(); // Fetch a new dog immediately after adding the attribute to the ban list
        }
    };

    // Removes an attribute from the ban list
    const removeFromBanList = (attribute) => {
        setBanList((prevBanList) => prevBanList.filter(item => item !== attribute));
    };

    useEffect(() => {
        fetchDogData(); // Fetch dog data when the component mounts
    }, []);

    return (
        <div className="container">
            <h1>Discover New Dogs!</h1>
            <div className="dog-image-container">
                {dogData ? (
                    <>
                        <img src={dogData.url} alt="Dog" className="dog-image" />
                        <p
                            onClick={() => addToBanList(dogData.breeds[0]?.name || 'Unknown')}
                            style={{ cursor: 'pointer', color: 'blue' }}
                        >
                            <strong>Breed:</strong> {dogData.breeds[0]?.name || 'Unknown'}
                        </p>
                        <p
                            onClick={() => addToBanList(dogData.breeds[0]?.life_span || 'Unknown')}
                            style={{ cursor: 'pointer', color: 'blue' }}
                        >
                            <strong>Life Span:</strong> {dogData.breeds[0]?.life_span || 'Unknown'}
                        </p>
                        <p
                            onClick={() => addToBanList(dogData.breeds[0]?.temperament || 'Unknown')}
                            style={{ cursor: 'pointer', color: 'blue' }}
                        >
                            <strong>Temperament:</strong> {dogData.breeds[0]?.temperament || 'Unknown'}
                        </p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
                <button onClick={fetchDogData}>Fetch New Dog</button>
            </div>
            <div className="ban-list">
                <h2>Ban List</h2>
                {banList.length > 0 ? (
                    banList.map((attribute, index) => (
                        <span
                            key={index}
                            className="ban-item"
                            onClick={() => removeFromBanList(attribute)}
                            style={{ cursor: 'pointer', color: 'red' }}
                        >
                            {attribute}
                        </span>
                    ))
                ) : (
                    <p>No attributes banned yet.</p>
                )}
            </div>
        </div>
    );
};

export default App;
