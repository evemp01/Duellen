import '../styles/Rules.css'
import {Link, useNavigate} from 'react-router-dom';
const Rules = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='alignRight'>
            <button className='exitButton' onClick={() => navigate(-1)}>x</button>
                {/* <Link to={"/Who_won"}>
                <button className='exitButton' >x</button>
                </Link> */}
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
