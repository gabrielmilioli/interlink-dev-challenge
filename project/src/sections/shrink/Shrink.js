import React, { useState } from 'react';
import './Shrink.css';

function Loading() {
    return (
        <div className="lds-dual-ring"></div>
    );
}

function Shrink() {
    const [loading, setLoading] = useState(false);

    const onShrink = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="section shrink">
            <div className="container">
                <div className="shrink-logo">
                    <div className="logo">
                        <a href="https://www.interlink.com.ar/" target="_blank" title="Visit our website!"
                            rel="noopener noreferrer">
                            <img src="images/interlink-logo-white.png" alt="Interlink logo" />
                        </a>
                    </div>
                </div>

                <div className="shrink-header">
                    <h1>Shrink your link!</h1>
                    <p>A long URL is always a problem. It’s hard to remember and share.</p>
                </div>

                <div className="shrink-form">
                    <div className="input-group">
                        <input type="text" name="url" placeholder="Paste the link to shrink it"
                            disabled={loading} />
                        <button className="btn-primary" onClick={onShrink}>
                            {loading === true ? (
                                Loading()
                            ) : (
                                "SHRINK"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shrink;
