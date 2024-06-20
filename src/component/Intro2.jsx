import './Intro2Style.scss'

function Intro2({heading, text}) {
  return (
    <div className='introContainer2'>
        <div className='heading'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
      
    </div>
  )
}

export default Intro2
