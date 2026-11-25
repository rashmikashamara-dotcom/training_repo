import "./assets/App.css";

function App() {
    const players_data = [
        { name: "Virat Kohli", team: "India", role: "Batsman", age: 37 },
        { name: "MS Dhoni", team: "India", role: "Wicket Keeper", age: 45 },
        { name: "Sachin Tendulkar", team: "India", role: "Batsman", age: 53 },
        { name: "Rohit Sharma", team: "India", role: "Batsman", age: 39 }
    ];

    return (
        <div className="main">
            <h1 className="title">Indian Cricket Players</h1>

            <div className="player-list">
                {players_data.map((player, index) => (
                    <div className="player-card" key={index}>
                        <span className="player-number">
                            0{index + 1}
                        </span>

                        <h2>{player.name}</h2>

                        <div className="details">
                            <p><strong>Team:</strong> {player.team}</p>
                            <p><strong>Role:</strong> {player.role}</p>
                            <p><strong>Age:</strong> {player.age}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;