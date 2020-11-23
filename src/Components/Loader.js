import loader from './loader.gif';

const Loader = () => {
    return (
        <div className='loader'>
            <img src={loader} alt='loading gif' />
            <h1>Fetching Data from NASA...</h1>
        </div>
    )
}

export default Loader
