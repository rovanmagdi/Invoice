import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form";
import { Input } from "./ui/input";
import { FieldsType } from "./forms/PatientForm";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
interface CustomProps {
  control: Control<any>;
  fieldsType: FieldsType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dataFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const {
    fieldsType,
    placeholder,
    iconSrc,
    iconAlt,
    disabled,
    dataFormat,
    showTimeSelect,
    renderSkeleton,
  } = props;
  switch (fieldsType) {
    case FieldsType.INPUT:
      return (
        <div className="flex rounded-md border-b border-dark-500 bg-dark-400 ">
          {iconSrc && (
            <img
              src={iconSrc}
              alt={iconAlt}
              height={24}
              width={24}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              iconSrc={iconSrc}
              iconAlt={iconAlt}
              disabled={disabled}
              dataFormat={dataFormat}
              showTimeSelect={showTimeSelect}
            />
          </FormControl>
        </div>
      );
    case FieldsType.CHECKBOX:
      return <div>Checkbox</div>;
    case FieldsType.TEXTAREA:
      return <div>Textarea</div>;
    case FieldsType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="US"
            placeholder={props.placeholder}
            international
            withCountryCallingCode
            value={field.value}
            onChange={field.onChange}
            className="input-phone"
          />
        </FormControl>
      );
    case FieldsType.DATE_PICKER:
      return <div>Date Picker</div>;
    case FieldsType.SELECT:
      return <div>Select</div>;
    case FieldsType.SKELETON:
      return renderSkeleton ? renderSkeleton(field) : null;
    default:
      return null;
  }
};
const CustomFormField = (props: CustomProps) => {
  const { control, name, fieldsType, label, placeholder, iconSrc, iconAlt } =
    props;
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex-1">
            {fieldsType !== FieldsType.CHECKBOX && label && (
              <FormLabel>{label}</FormLabel>
            )}

            <RenderField field={field} props={props} />
            <FormMessage className="shad-error" />
          </FormItem>
        )}
      />
    </>
  );
};

export default CustomFormField;
