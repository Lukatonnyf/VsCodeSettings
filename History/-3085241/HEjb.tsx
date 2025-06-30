import FormFeedback from "./formFeedback";

export default function CardAddFeedbk() {
  function handleNewFeedback(name: string, feedback: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>

      <FormFeedback onSubmitAction={handleNewFeedback} />

    </div>
  )
}
