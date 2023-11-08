import '../styles/Who_won.css'

const Who_won = () => {
    return (
        <div>
            <div className='align_menu_help'>
            <div>
                <button className='helpButton' onClick>?</button>
            </div>
            <div>
            <button className='menuButton' onClick>≡</button>
            </div>
            </div>
            <div className='align' >
                <h1>Vem vann?</h1>
                <button className='player1Button' onClick>
                    <p className='playerText'>Spelare 1</p>
                </button>
                <h1>vs</h1>
                <button className='player2Button' onClick>
                    <p className='playerText'>Spelare 2</p>
                </button>
            </div>
        </div>
    );
};

export default Who_won;
