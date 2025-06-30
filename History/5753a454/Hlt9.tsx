// Import the presentational Feedback component, not the async loader
import Feedback from "./components/feedbacks"

const Experiencia = async () => {
  // If Feedback is an async data loader, call it here and pass its result to a presentational component
  const feedbackData = await Feedback(); // This assumes Feedback returns data, not JSX

  return (
    <div className="h-[100dvh] w-full bg-red-400">
      {/* Render a presentational component and pass the data as props */}
      {/* <FeedbackComponent posts={feedbackData.props.posts} error={feedbackData.props.error} /> */}
      {/* Replace FeedbackComponent with your actual presentational component */}
      {/* If Feedback is a React component, ensure it is not async */}
    </div>
  );
};

export default Experiencia
