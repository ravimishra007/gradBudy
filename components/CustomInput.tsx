import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

import { Control, FieldPath, FieldValues } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'
import { CustomInputProps } from '@/constents/types'

const CustomInput = <T extends FieldValues>({ control, name, label, placeholder }: CustomInputProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label nav-heading">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col mt-1">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class bg-[#E9E9FE] placeholder:text-[#6941C6]/40"
                type={name === 'password' ? 'password' : (name == "email") ? 'email' : 'text'}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput