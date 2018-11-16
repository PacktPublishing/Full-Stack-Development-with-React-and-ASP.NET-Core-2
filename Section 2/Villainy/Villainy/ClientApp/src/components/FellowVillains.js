import React from 'react';
import { connect } from 'react-redux';

const allvillains = [
    {
        name: "Junq",
        powers: "Can make weapons and gadgets out of anything available",
        hobbies: "Crochet, macrame, kidnapping"
    },
    {
        name: "Darkness",
        powers: "Converts light into darkness",
        hobbies: "Robbing banks, blackmail, puzzles"
    },
    {
        name: "Blast Wave",
        powers: "Generates concussive blasts with his hands",
        hobbies: "General villainy, doggie dancing"
    }
]

const FellowVillains = props => (
    <div>
        <h1>Fellow Villains</h1>
        {renderVillains()}
    </div>
);

function renderVillains() {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Powers</th>
                    <th>Hobbies</th>
                </tr>
            </thead>
            <tbody>
                {allvillains.map(villain =>
                    <tr key={villain.name}>
                        <td>{villain.name}</td>
                        <td>{villain.powers}</td>
                        <td>{villain.hobbies}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default connect()(FellowVillains);
