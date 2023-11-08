import '../styles/Who_won.css'
const Who_won = () => {
    return (
        <div>
            <div className='align_menu_help'>
                <div>
                    <button className='helpButton'>?</button>
                </div>
                <div>
                    <button className='menuButton'>≡</button>
                </div>
            </div>
            <div className='align' >
                <h1>Vem vann?</h1>
                <button className='player1Button'>
                    Spelare 1
                </button>
                <h1>eller</h1>
                <button className='player2Button'>
                    Spelare 2
                </button>
            </div>
        </div>
    );
};

export default Who_won;
