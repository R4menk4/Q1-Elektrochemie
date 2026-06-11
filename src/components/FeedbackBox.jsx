export default function FeedbackBox({ feedback }) {
  if (!feedback) return null;

  return (
    <div className={`feedback feedback--${feedback.status}`} role="status">
      <strong>
        {feedback.status === 'correct' && 'Richtig'}
        {feedback.status === 'partial' && 'Teilweise richtig'}
        {feedback.status === 'wrong' && 'Noch nicht richtig'}
      </strong>
      <p>{feedback.message}</p>
    </div>
  );
}
