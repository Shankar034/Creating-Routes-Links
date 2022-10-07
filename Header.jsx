import PropTypes from 'prop-types'

function header({ text, bgColor, textColor}) {

    const headerStyles ={
        backgroundColor: bgColor,
          color: textColor,

    }
  return (
    <header style={headerStyles }>
        <div className="container">
        <h2>{text}</h2>

        </div>

    </header>
  )
}

header.defaultProps = {
    text:'Feedback UI',
    // bgColor:'rgba(0,0,0,0.6)',
    textColor:'#ff6a95'
}

Headers.propTypes = {
    text:PropTypes.string,
    bgColor: PropTypes.string,
    textColor:PropTypes.string,
}

export default header