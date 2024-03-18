import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/app/cities");
  }
  return (
    <Button type="back" onClick={(e) => handleClick(e)}>
      &larr;Back
    </Button>
  );
}
