export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  messageQuery: string;
}

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof AddressFormData]?: string[];
  };
}
