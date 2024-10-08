import './AlertStyle.scss';

const Alert = ({ message }) => {
    return (
      <div className="alert">
        {message}
      </div>
    );
  };

export default Alert;
