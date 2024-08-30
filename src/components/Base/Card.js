import React from "react";
import Button from "./Button";

const Card = ({
  title = "Title",
  description = "Body text for whatever you'd like to say goes here. Body text contains detailed description.",
  btnLabel = "Button"
}) => {
  return (
    <div className="flex flex-col border border-slate-100 rounded-md p-6">
      <div>
        <div className="bg-gray-200 h-[160px] mb-4 w-[160px]"></div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">
          {description}
        </p>
        <Button className="mt-4">{btnLabel}</Button>
      </div>
    </div>
  )
}

export default Card;