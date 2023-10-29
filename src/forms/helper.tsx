import { get } from "lodash";
import { UseFormReturn } from "react-hook-form";

export function isError(form: UseFormReturn<any, any, undefined>) {
  return (field: string) => {
    return !!get(form, `formState.errors["${field}"]`);
  };
}

export function getErrorMessage(form: UseFormReturn<any, any, undefined>) {
  return (field: string) => {
    return String(get(form, `formState.errors["${field}"].message`));
  };
}

export function hasErrors(form: UseFormReturn<any, any, undefined>) {
  return () => {
    return !!Object.keys(form.formState.errors || {}).length;
  };
}

export function getListErrors(form: UseFormReturn<any, any, undefined>) {
  return (): { field: string; message: string }[] => {
    const errors: { field: string; message: string }[] = [];
    Object.keys(form.formState.errors).forEach((field) => {
      errors.push({
        field,
        message: form.formState.errors[field]?.message as string,
      });
    });
    return errors;
  };
}

export function commonFormFn(form: UseFormReturn<any, any, undefined>) {
  return {
    form,
    isError: isError(form),
    getErrorMessage: getErrorMessage(form),
    hasErrors: hasErrors(form),
    getListErrors: getListErrors(form),
  };
}
