// components/ui/avatar-with-status.tsx
'use client';

import React, { useState, type ChangeEvent, type KeyboardEvent } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/core/radio-group';
import { Input } from '@/components/core/input';
import PencilIcon from '@/assets/svgs/pencil.svg?react';

interface IRadioOption {
  id: string;
  value: string;
  onOptionChange: (id: string, value: string) => void;
}

interface IRadioInputs {
  options: Omit<IRadioOption, 'onOptionChange'>[];
  name: string;
  onOptionChange: (id: string, value: string) => void;
}

function RadioInput(props: IRadioOption) {
  const { id, value, onOptionChange } = props;
  const [editing, setEditing] = useState(false);
  const startEditing = () => {
    setEditing(true);
  };
  const stopEditing = () => {
    setEditing(false);
  };
  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onOptionChange(id, value);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (['Enter', 'Escape'].includes(event.key)) {
      stopEditing();
    }
  };
  return (
    <div key={id} className="flex gap-3 items-center hover:[&>.icon]:flex">
      <div className="flex items-center gap-5">
        <RadioGroupItem value="option-one" id="option-one" />
        {!editing ? (
          <label className="typography-body" htmlFor="option-one">
            {value}
          </label>
        ) : (
          <Input
            autoFocus
            onKeyDown={handleKeyDown}
            value={value}
            onChange={handleValueChange}
            className="border-0 outline-0 focus-visible:ring-0 text-8xl typography-body w-auto"
          />
        )}
      </div>
      {!editing && (
        <div
          onClick={startEditing}
          className="w-6 h-6 icon justify-center items-center hidden cursor-pointer"
        >
          <PencilIcon />
        </div>
      )}
    </div>
  );
}

function RadioInputs(props: React.ComponentProps<'div'> & IRadioInputs) {
  const { className, name, options, onOptionChange } = props;
  return (
    <RadioGroup name={name} className={className}>
      {options.map((option: Omit<IRadioOption, 'onOptionChange'>) => (
        <RadioInput onOptionChange={onOptionChange} {...option} />
      ))}
    </RadioGroup>
  );
}

export default RadioInputs;
