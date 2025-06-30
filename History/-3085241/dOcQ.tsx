import FormFeedback from "./formFeedback";

export default function CardAddFeedbk() {
  return (
    <div>

      <FormFeedback onSubmitAction={handleNewFeedback} />

    </div>
  )
}
