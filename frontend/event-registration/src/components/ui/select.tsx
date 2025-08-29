"use client";

import * as React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  onValueChange?: (value: string) => void;
}

export function Select({ onValueChange, children, ...props }: SelectProps) {
  return (
    <select
      className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e) => onValueChange?.(e.target.value)}
      {...props}
    >
      {children}
    </select>
  );
}

interface SelectItemProps extends Omit<React.OptionHTMLAttributes<HTMLOptionElement>, "value"> {
  value: string; // explicitly required
  children: React.ReactNode;
}

export function SelectItem({ value, children, ...props }: SelectItemProps) {
  return (
    <option value={value} {...props}>
      {children}
    </option>
  );
}
