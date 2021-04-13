const PrimaryButton = ({name, action}) => {
  return (
    <div>
      <button onClick={action}>{name}</button>
    </div>
  )
}

export default PrimaryButton