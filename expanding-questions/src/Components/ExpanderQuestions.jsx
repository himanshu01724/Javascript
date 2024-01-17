import React from "react"
import "./index.css"
import ExpanderItem from "./ExpanderItem";

const faqs = [
    {
      title: "Why are dogs so cute?",
      text:
        "Because they are more loyal than humans, they have beautiful eyes and they walk very in a cute way"
    },
    {
      title: "Who is your favorite dog?",
      text:
        "Labrador"
    },
    {
      title: "How you carry your dog through airplane",
      text:
        "By buying an extra seat or putting them in a dog basket"
    }
  ];

function ExpanderQuestions(){

    return(
    <>
    <div className = "accordion">
        {faqs.map((value,i)=>(
            <div key = {value.title}>
            <ExpanderItem num = {i+1} title = {value.title} text = {value.text}/>
            </div>
        ))}
    </div>
    </>
    )
}
export default ExpanderQuestions;