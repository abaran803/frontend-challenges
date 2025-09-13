// components/ui/avatar-with-status.tsx
'use client';

import React, { useState, type ChangeEvent, type KeyboardEvent } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/core/radio-group';
import { Input } from '@/components/core/input';
import PencilIcon from '@/assets/svgs/pencil.svg?react';
import type { IOption } from '@/types/core';
import Delete from '@/components/core/icons/delete';
import Close from '@/components/core/icons/close';

type OnOptionChange = (id: string, value: string) => void;

interface RadioInputsProps {
  options: IOption[];
  name: string;
  onOptionChange: OnOptionChange;
  deletable?: boolean;
}

function RadioInput(
  props: IOption & { onOptionChange: OnOptionChange; deletable: boolean }
) {
  const { id, value, onOptionChange, deletable } = props;
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
    <div className="flex items-center justify-between">
      <div
        key={id}
        className="flex gap-3 items-center hover:[&>.icon]:flex py-2.5"
      >
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
      {editing && (
        <Close className="cursor-pointer" onClick={() => setEditing(false)} />
      )}
      {deletable && !editing && <Delete onClick={() => {}} />}
    </div>
  );
}

function RadioInputs(props: React.ComponentProps<'div'> & RadioInputsProps) {
  const { className, name, options, onOptionChange, deletable = false } = props;
  return (
    <RadioGroup name={name} className={className}>
      {options.map((option: IOption) => (
        <RadioInput
          deletable={deletable}
          onOptionChange={onOptionChange}
          {...option}
        />
      ))}
    </RadioGroup>
  );
}

export default RadioInputs;
