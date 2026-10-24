import './FormAlert.css';

export default function FormAlert({ type, message, onDismiss }) {
  return (
    <div className={`form-alert form-alert--${type}`} role={type === 'error' ? 'alert' : 'status'}>
      <span className='form-alert_icon' aria-hidden='true'>
        {type === 'success' ? '✓' : '!'}
      </span>
      <p className='form-alert_message'>{message}</p>
      <button
        className='form-alert_dismiss'
        type='button'
        aria-label='Dismiss notification'
        onClick={onDismiss}
      >
        ×
      </button>
    </div>
  );
}
