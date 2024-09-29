"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";

export enum FieldsType {
  INPUT = "input",
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phone_input",
  DATE_PICKER = "date_picker",
  SELECT = "select",
  SKELETON = "skeleton",
}
export default function PatientForm() {
  const formSchema = z.object({
    name: z
      .string()
      .min(2, {
        message: "name must be at least 2 characters.",
      })
      .max(50, {
        message: "name must be at least 2 characters.",
      }),
    email: z.string().email("Invalid email"),
    phone: z.string().refine((value) => /^\d{10,15}$/.test(value), {
      message: "Invalid phone number",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there</h1>
          <p className="text-dark-700">Schedule your first appointment</p>
          <p></p>
        </section>
        <CustomFormField
          control={form.control}
          fieldsType={FieldsType.INPUT}
          name="name"
          label="Full name"
          placeholder="Enter your full name"
          iconSrc="/assets/icons/user.svg"
          iconAlt="User"
        />
        <CustomFormField
          control={form.control}
          fieldsType={FieldsType.INPUT}
          name="email"
          label="Email"
          placeholder="Enter your email"
          iconSrc="/assets/icons/email.svg"
          iconAlt="User"
        />

        <CustomFormField
          control={form.control}
          fieldsType={FieldsType.PHONE_INPUT}
          name="phone"
          placeholder="Phone number"
          label="Phone number"
          iconAlt="phone"
        />
        <SubmitButton isLoading={false}>Get Started</SubmitButton>
      </form>
    </Form>
  );
}
