"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ContactFormData } from "@/lib/types/contact";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "../ui/card";
import { Textarea } from "../ui/textarea";

// const initialState: ActionResponse = {
//   success: false,
//   message: "",
// };

const ContactForm = () => {
  const { register, handleSubmit } = useForm<ContactFormData>();

  const onSubmit = async (formData: ContactFormData) => {
    console.log(formData);
  };

  return (
    <>
      <Card>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            autoComplete="on">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    required
                    minLength={5}
                    maxLength={50}
                    autoComplete="first-name"
                    aria-describedby="firstName-error"
                    {...register("firstName")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    minLength={5}
                    maxLength={50}
                    autoComplete="last-name"
                    aria-describedby="lastName-error"
                    {...register("lastName")}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                  maxLength={100}
                  autoComplete="email-address"
                  aria-describedby="email-error"
                  {...register("email")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobileNumber">Mobile Number</Label>
                <Input
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="+880 1719 050 465"
                  maxLength={20}
                  required
                  autoComplete="mobile-number"
                  aria-describedby="mobileNumber-error"
                  {...register("mobileNumber")}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    placeholder="New York"
                    required
                    minLength={2}
                    maxLength={50}
                    autoComplete="address-level2"
                    aria-describedby="city-error"
                    {...register("city")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    name="state"
                    placeholder="NY"
                    required
                    minLength={2}
                    maxLength={50}
                    autoComplete="address-level1"
                    aria-describedby="state-error"
                    {...register("state")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    placeholder="10001"
                    required
                    pattern="[0-9]{5}(-[0-9]{4})?"
                    maxLength={10}
                    autoComplete="postal-code"
                    aria-describedby="zipCode-error"
                    {...register("zipCode")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    placeholder="United States"
                    required
                    minLength={2}
                    maxLength={56}
                    autoComplete="country-name"
                    aria-describedby="country-error"
                    {...register("country")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="messageQuery">Message</Label>
                <Textarea
                  id="messageQuery"
                  name="messageQuery"
                  placeholder="Type your message"
                  required
                  minLength={2}
                  maxLength={56}
                  autoComplete="messageQuery-name"
                  aria-describedby="messageQuery-error"
                  {...register("messageQuery")}
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactForm;
