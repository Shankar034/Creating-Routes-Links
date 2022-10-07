
// function Card({children, reverse}) {
//   return (
//     <div className={`card ${reverse && 'reverse'}`}>
//         {children}
//     </div>
//   )
// }


import PropTypes from 'prop-types'
function Card({children, reverse}) {
    return (
      <div 
      className= 'card'
      style={{
        backgroundColor:reverse ? 'rgba(2, 2, 42, 0.9)' : '#fff',
        color: reverse ? '#fff' :'#000',
      }}
      >
          {children}
      </div>
    )
  }

  Card.defaultProps ={
    reverse:false,
  }

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card