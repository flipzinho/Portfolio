import loading from '../../assets/loading-gif.gif'
import './Loading.css'
export const Loading = () => {
    return(
        <div className='containerLoading'>
            <img src={loading} alt="loading" className='loading' />
        </div>
    )
}