import propTypes from 'prop-types'

function Button({children,type,version,isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps={
  type:'button',
  version:'Primary',
  isDisabled:false
}
Button.propTypes={
  children:propTypes.node.isRequired,
  type:propTypes.string,
  version:propTypes.string,
  isDisabled:propTypes.bool
}



export default Button
