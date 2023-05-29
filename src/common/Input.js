import './input.css';

const Input = ({label, name, formik, type='text'}) => {
    return ( 
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} {...formik.getFieldProps(name)}/>
            {formik.errors[name] && formik.touched[name] && (<p className='formikError'>{formik.errors[name]}</p>)}
        </div>
     );
}
 
export default Input;