import '../styles/Rules.css'
import {Link} from 'react-router-dom';
const Rules = () => {
    return (
        <div>
            <div className='alignRight'>
                <Link to={"/Who_won"}>
                <button className='exitButton' >x</button>
                </Link>
            </div>
            <div className='align' >
                <h1>Spelregler</h1>
                <div className='rulesDiv'>
                    <p>........Regler.........</p>
                </div>

            </div>
        </div>
    );
};

export default Rules;
