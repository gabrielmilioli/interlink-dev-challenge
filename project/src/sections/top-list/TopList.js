import React from 'react';
import './TopList.css';

function TopList() {
        
    const topURLs = [
        { id: 1, url: "https://intershrink.paris/ouioui", numberOfVisits: 1675 },
        { id: 2, url: "https://intershrink.paris/m4r1aN", numberOfVisits: 1200 },
        { id: 3, url: "https://intershrink.paris/2JCMTS", numberOfVisits: 1150 },
        { id: 4, url: "https://intershrink.paris/z58IK0", numberOfVisits: 1000 },
        { id: 5, url: "https://intershrink.paris/R4bad3", numberOfVisits: 980 },
    ];

    return (
        <div className="section top-list">
            <div className="container">
                <div className="top-list-header">
                    <h1>Top 5</h1>
                </div>

                <div className="top-list-table">
                    <table>
                        <tbody>
                            {topURLs.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <a href={item.url} target="_blank" title="Visit link" rel="noopener noreferrer">{item.url}</a>
                                    </td>
                                    <td className="text-right" title="Total of visits">
                                        {item.numberOfVisits}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TopList;
