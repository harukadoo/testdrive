/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='inner__container'>
        <div className='content__container'>
          <div className="form">
            <div className="form__container">
              <div className="form__title">WELCOME!</div>
              <div className="form__caption">
                *you must to create an account first to enjoy all the features of the site
              </div>

              <form className='sign-up__form' action="#" method="post">
                <input type="text" id='nickname' placeholder='your nickname' />

                <input type="email" id='email' placeholder='your email' />

                <input type="password" id='password' placeholder='your password' />

                <div className="form__navigation">
                  <a href="https://youtu.be/pyfjoqQzO5k?si=eyZPvCOllXNtK5cL" className="sign-in__button">sign in</a>
                  <button type="submit" className="sign-up__button">sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className='background'>
          <div className='background__container'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
