const Distances = () => {
  return (
    <>
      <option selected disabled hidden value="Unselected">
       ▼ &nbsp; How far will we carry your items? (Choose one) 
      </option>
      <option value="0 to 15 feet">0 to 15 feet — Loading dock or similar</option>
      <option value="15 to 25 feet">15 to 25 feet — Very short walk</option>
      <option value="25 to 50 feet">25 to 50 feet — Short walk</option>
      <option value="50 to 75 feet">50 to 75 feet — Length of a bowling lane</option>
      <option value="75 to 100 feet">75 to 100 feet — Length of a tennis court</option>
      <option value="100 to 250 feet">100 to 250 feet — Multiple long hallways</option>
      <option value="250 to 500 feet">250 to 500 feet — Length of a football field</option>
      <option value="Over 500 feet">Over 500 feet — Very long</option>
    </>
  )
}

export default Distances