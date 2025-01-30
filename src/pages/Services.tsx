function Services() {
    const containerStyle = {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        boxSizing: 'border-box'
    };

    const serviceStyle = {
        margin: '10px 0',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: '80%',
        maxWidth: '600px',
        textAlign: 'center'
    };

    return (
        <div style={containerStyle}>
            <h1>Our Services</h1>
            <div style={serviceStyle}>
                <h2>Web Development</h2>
                <p>We provide modern web development services using the latest technologies.</p>
            </div>
            <div style={serviceStyle}>
                <h2>Mobile Development</h2>
                <p>Our team creates responsive and user-friendly mobile applications.</p>
            </div>
            <div style={serviceStyle}>
                <h2>UI/UX Design</h2>
                <p>We design intuitive and engaging user interfaces for your applications.</p>
            </div>
        </div>
    );
}

export default Services;