import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { cn } from "@/services/Methods/normalMethods";

const ButtonNextStep = ({ handleClick, label, amt, icon, type, disabled, iconClassName }) => {
  const buttonType = type === "submit" ? "submit" : "button";
  

  return (
    <button
      className="primary-button mx-auto flex flex-1 items-center justify-center gap-4 sm:gap-7 text-white"
      onClick={handleClick}
      type={buttonType}
      disabled={disabled}
    >
      {amt && <span>{amt}</span>}
      {icon}
      {label && <span>{label}</span>}
      <ChevronRightIcon className={`${iconClassName} w-4 h-4`} />
    </button>
  );
};

export const ButtonPreviousStep = ({ handleClick, label, amt, icon, type, disabled, className }) => {
  const buttonType = type === "submit" ? "submit" : "button";

  return (
    <button
      className={cn("primary-button mx-auto flex flex-1 items-center justify-center gap-4 sm:gap-7 text-white", className)}
      onClick={handleClick}
      type={buttonType}
      disabled={disabled}
    >
      <ChevronLeftIcon className="w-4 h-4" />

      {amt && <span>{amt}</span>}
      {icon}
      {label && <span>{label}</span>}
    </button>
  );
};

export default ButtonNextStep;
