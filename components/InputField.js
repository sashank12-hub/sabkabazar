const InputField = ({
  type,
  name,
  isrequired,
  value,
  label,
  method
}) => {
  return (
    <>
      <div className='input-container'>
        <input
          type={type}
          name={name}
          required={isrequired}
         onChange={(e)=>method(e)}
          value={value}
        />
        <label className="label-name">
          <span className="content-name">
            {label}
          </span>
        </label>
      </div>
    </>
  )
};

export default InputField;