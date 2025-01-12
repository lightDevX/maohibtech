"use client";
import { sendMail } from "@/lib/send-mail";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
const contactFormSchema = z.object({
  name: z.min(2, { message: "Please Enter Your Name" }),
  email: z.email({ message: "Please Enter a Valid Email Address" }),
  message: z.min(10, {
    message: "Please make sure your message is at least 10 characters long.",
  }),
});
export default function ContactForm() {
  const form =
    useForm <
    z.infer <
    typeof contactFormSchema >>
      {
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
          name: "",
          email: "",
          message: "",
        },
      };
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values) => {
    const mailText = `Name: ${values.name}\n  Email: ${values.email}\nMessage: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: "New Contact Us Form",
      text: mailText,
    });
    if (response?.messageId) {
      toast.success("Application Submitted Successfully.");
    } else {
      toast.error("Failed To send application.");
    }
  };
  return (
    <Form {...form}>
      <form
        className="grid grid-cols-3 items-center p-4 lg:p-6"
        onSubmit={form.handleSubmit(onSubmit)}>
        <div className="col-span-3 flex flex-col gap-4 lg:col-span-3 lg:gap-6">
          <h2 className="lg:text-xl">Enter Your Good Name Here:</h2>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h2 className="lg:text-xl">Enter Your Email Address:</h2>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h2 className="lg:text-xl">Enter Your Message Here:</h2>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="My question is which framework do you prefer to use?"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading}>
            {isLoading ? "Sending....." : "Send"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

//  <form
//         onSubmit={submitForm}
//         className="mx-auto mt-16 max-w-xl sm:mt-20">
//         <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//           <div>
//             <label
//               htmlFor="first-name"
//               className="block text-sm/6 font-semibold text-gray-900">
//               First name
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="first-name"
//                 name="firstName"
//                 type="text"
//                 autoComplete="given-name"
//                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//               />
//             </div>
//           </div>
//           <div>
//             <label
//               htmlFor="last-name"
//               className="block text-sm/6 font-semibold text-gray-900">
//               Last name
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="last-name"
//                 name="last-name"
//                 type="text"
//                 autoComplete="family-name"
//                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//               />
//             </div>
//           </div>
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="company"
//               className="block text-sm/6 font-semibold text-gray-900">
//               Company
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="company"
//                 name="company"
//                 type="text"
//                 autoComplete="organization"
//                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//               />
//             </div>
//           </div>
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="email"
//               className="block text-sm/6 font-semibold text-gray-900">
//               Email
//             </label>
//             <div className="mt-2.5">
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//               />
//             </div>
//           </div>
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="phone-number"
//               className="block text-sm/6 font-semibold text-gray-900">
//               Phone number
//             </label>
//             <div className="mt-2.5">
//               <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
//                 <div className="grid shrink-0 grid-cols-1 focus-within:relative">
//                   <select
//                     id="country"
//                     name="country"
//                     autoComplete="country"
//                     aria-label="Country"
//                     className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
//                     <option>US</option>
//                     <option>CA</option>
//                     <option>EU</option>
//                   </select>
//                   <ChevronDownIcon
//                     aria-hidden="true"
//                     className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
//                   />
//                 </div>
//                 <input
//                   id="phone-number"
//                   name="phone-number"
//                   type="text"
//                   placeholder="123-456-7890"
//                   className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="message"
//               className="block text-sm/6 font-semibold text-gray-900">
//               Message
//             </label>
//             <div className="mt-2.5">
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={4}
//                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//                 defaultValue={""}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mt-10">
//           <button
//             type="submit"
//             className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//             Lets talk
//           </button>
//         </div>
//       </form>
