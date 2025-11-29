export default function SearchPopup() {
  return (
    <div className='search-popup'>
      <button className='close-search style-two'>
        <span className='visually-hidden'>Multiply: </span>
        <span className='flaticon-multiply'>
          <i className='far fa-times-circle'></i>
        </span>
      </button>
      <button className='close-search'>
        <span className='visually-hidden'>Top: </span>
        <i className='bi bi-arrow-up'></i>
      </button>
      <form method='post' action='#'>
        <div className='form-group'>
          <input
            type='search'
            name='search-field'
            defaultValue=''
            placeholder='Search Here'
            required
          />
          <button type='submit'>
            <span className='visually-hidden'>Search: </span>
            <i className='fa fa-search'></i>
          </button>
        </div>
      </form>
    </div>
  );
}
