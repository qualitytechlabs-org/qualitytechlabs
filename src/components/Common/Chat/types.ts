export type Option = {
  label: string;
  value: string;
  next?: string;
};

export type Question = {
  id: string;
  text: string;
  field?: keyof Lead;
  options?: readonly Option[];
};

export type Message = {
  id: string; 
  sender: "bot" | "user";
  text: string;
  options?: readonly Option[];
};

export type Lead = {
  service?: string;
  budget?: string;
  timeline?: string;
  contact?: string;

  email?: string;
  phone?: string;

  message?: string;
};

