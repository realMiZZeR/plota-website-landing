import ReactFullpage from '@fullpage/react-fullpage'


const TestPage = () => {

  return (
    <ReactFullpage 
      licenseKey={''}
      
      scrollingSpeed={1000} 
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className='section'>
              <h1>Hello!</h1>
              <p>It's me - Mario!</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>Show API</button>
            </div>
            <div className='section'>
              <h1>Bruh!</h1>
              <p>Where's ur motivation?</p>
            </div>
          </ReactFullpage.Wrapper>
        )
      }} />
  )
}

export default TestPage