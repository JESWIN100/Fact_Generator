import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FactGenerator() {
    const [fact, setFact] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
            const data = await response.json();
            setFact(data.text);
            toast.success("Here's a new fact!");
        } catch (error) {
            console.log(error);
            toast.error("Error fetching fact. Try again later.");
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Random Fact Generator</h1>
            <div style={styles.factContainer}>
                <p style={styles.fact}>{fact}</p>
            </div>
            <button style={styles.button} onClick={handleSubmit}>Generate Fact</button>
            <ToastContainer />
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: '2em',
        marginBottom: '20px',
        color: '#333',
    },
    factContainer: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '50px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        textAlign: 'center',
        marginBottom: '20px',
    },
    fact: {
        fontSize: '1.2em',
        color: '#555',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1em',
        color: '#fff',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
};

export default FactGenerator;
